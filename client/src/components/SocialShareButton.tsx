import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Share2, Twitter, Linkedin, Facebook, MessageCircle, Copy } from "lucide-react";
import { useSocialShare, ShareData } from "@/hooks/useSocialShare";
import { useLanguage } from "@/hooks/useLanguage";

interface SocialShareButtonProps {
  shareData: ShareData;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
  showText?: boolean;
}

export function SocialShareButton({ 
  shareData, 
  size = 'sm', 
  variant = 'ghost',
  showText = false 
}: SocialShareButtonProps) {
  const { shareContent, isSharing } = useSocialShare();
  const { t } = useLanguage();

  const platforms = [
    { 
      key: 'twitter', 
      label: 'Twitter', 
      icon: Twitter, 
      color: 'text-blue-400',
      bgColor: 'hover:bg-blue-50' 
    },
    { 
      key: 'linkedin', 
      label: 'LinkedIn', 
      icon: Linkedin, 
      color: 'text-blue-600',
      bgColor: 'hover:bg-blue-50' 
    },
    { 
      key: 'facebook', 
      label: 'Facebook', 
      icon: Facebook, 
      color: 'text-blue-700',
      bgColor: 'hover:bg-blue-50' 
    },
    { 
      key: 'whatsapp', 
      label: 'WhatsApp', 
      icon: MessageCircle, 
      color: 'text-green-600',
      bgColor: 'hover:bg-green-50' 
    },
    { 
      key: 'copy', 
      label: 'Copy Link', 
      icon: Copy, 
      color: 'text-gray-600',
      bgColor: 'hover:bg-gray-50' 
    },
  ];

  const handleShare = (platform: string) => {
    shareContent({
      ...shareData,
      platform: platform as any,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={variant} 
          size={size === 'md' ? 'default' : size} 
          disabled={isSharing}
          className="gap-2"
          data-testid={`share-button-${shareData.contentType}-${shareData.contentId}`}
        >
          <Share2 className="h-4 w-4" />
          {showText && <span>{t('share.term')}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <DropdownMenuItem
              key={platform.key}
              onClick={() => handleShare(platform.key)}
              className={`flex items-center gap-3 cursor-pointer ${platform.bgColor}`}
              data-testid={`share-${platform.key}-${shareData.contentType}`}
            >
              <Icon className={`h-4 w-4 ${platform.color}`} />
              <span>{platform.label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}