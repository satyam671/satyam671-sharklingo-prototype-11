import { useToast } from './use-toast';

export interface ShareData {
  contentType: 'term' | 'quiz_result' | 'achievement';
  contentId: string;
  platform: 'twitter' | 'linkedin' | 'facebook' | 'whatsapp' | 'copy';
  shareData?: any;
}

export function useSocialShare() {
  const { toast } = useToast();

  const generateShareText = (shareData: ShareData): string => {
    switch (shareData.contentType) {
      case 'term':
        const termData = shareData.shareData;
        return `🦈 Just learned about "${termData.term}" on Shark Tank Lingo! \n\n"${termData.simpleExplanation}"\n\nCheck it out: ${window.location.origin}`;
      
      case 'quiz_result':
        const quizData = shareData.shareData;
        return `🎯 Just scored ${quizData.score}/${quizData.total} on the Shark Tank Business Quiz! \n\nTest your entrepreneurial knowledge: ${window.location.origin}`;
      
      case 'achievement':
        const achievementData = shareData.shareData;
        return `🏆 Achievement Unlocked: ${achievementData.title}! \n\n${achievementData.description}\n\nJoin me on Shark Tank Lingo: ${window.location.origin}`;
      
      default:
        return `Check out Shark Tank Lingo - Learn business terms the fun way! ${window.location.origin}`;
    }
  };

  const generateShareUrl = (shareData: ShareData, platform: string): string => {
    const text = encodeURIComponent(generateShareText(shareData));
    const url = encodeURIComponent(window.location.origin);
    
    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${text}`;
      
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`;
      
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
      
      case 'whatsapp':
        return `https://api.whatsapp.com/send?text=${text}`;
      
      default:
        return '';
    }
  };

  const shareContent = async (shareData: ShareData) => {
    if (shareData.platform === 'copy') {
      // Copy to clipboard
      const text = generateShareText(shareData);
      try {
        await navigator.clipboard.writeText(text);
        toast({
          title: "Copied to clipboard!",
          description: "Share text has been copied to your clipboard.",
        });
      } catch (error) {
        toast({
          title: "Copy failed",
          description: "Could not copy to clipboard. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      // Open share URL
      const shareUrl = generateShareUrl(shareData, shareData.platform);
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        toast({
          title: "Shared successfully!",
          description: "Thank you for sharing your progress.",
        });
      }
    }
  };

  return {
    shareContent,
    generateShareText,
    isSharing: false,
  };
}