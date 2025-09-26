import React from 'react';

// Enhanced formatting utility for consistent text rendering across the site
export function renderFormattedText(text: string, className: string = "text-gray-700 text-base leading-relaxed"): React.ReactElement {
  const lines = text.split('\\n');
  
  return (
    <div className="space-y-4">
      {lines.map((line, lineIndex) => {
        if (!line.trim()) return <div key={lineIndex} className="h-3" />;
        
        // Handle bold formatting **text**
        const parts = line.split(/\*\*(.*?)\*\*/);
        
        return (
          <p key={lineIndex} className={className}>
            {parts.map((part, partIndex) => {
              // Odd indices are the bold parts
              if (partIndex % 2 === 1) {
                return <strong key={partIndex} className="font-semibold text-gray-900">{part}</strong>;
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
}

// Enhanced blog content formatting with proper paragraphs and visual hierarchy
export function renderBlogContent(content: string): React.ReactElement {
  // Split content by double newlines to get actual paragraphs
  const paragraphs = content.split('\n\n').filter(p => p.trim());
  
  return (
    <div className="prose prose-lg max-w-none">
      {paragraphs.map((paragraph, index) => {
        const trimmedParagraph = paragraph.trim();
        if (!trimmedParagraph) return null;
        
        // Check if this is a numbered header (e.g., "**1. Valuation: The Foundation of Every Deal**")
        if (trimmedParagraph.match(/^\*\*\d+\./)) {
          const headerText = trimmedParagraph.replace(/\*\*/g, '');
          
          // Check if we're in a "Key Takeaways" section by looking for the header in previous paragraphs
          const keyTakeawaysIndex = paragraphs.findIndex(p => p.includes('Key Takeaways for Entrepreneurs'));
          const isInKeyTakeaways = keyTakeawaysIndex !== -1 && index > keyTakeawaysIndex;
          
          if (isInKeyTakeaways) {
            // Style as smaller text for takeaway points with bold formatting
            const parts = headerText.split(/\*\*(.*?)\*\*/);
            return (
              <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4 mt-4 font-bold">
                {parts.map((part, partIndex) => {
                  if (partIndex % 2 === 1) {
                    return (
                      <strong key={partIndex} className="font-bold text-shark-navy">
                        {part}
                      </strong>
                    );
                  }
                  return part;
                })}
              </p>
            );
          }
          
          // Regular numbered headers (for main sections)
          return (
            <h2 key={index} className="text-2xl font-serif font-bold text-shark-navy mt-12 mb-6 pb-3 border-b-2 border-shark-gold">
              {headerText}
            </h2>
          );
        }
        
        // Check if this is a main header (e.g., "**Real-World Example: The Jugaad Patches Success Story**")
        if (trimmedParagraph.startsWith('**') && trimmedParagraph.endsWith('**') && trimmedParagraph.includes(':')) {
          const headerText = trimmedParagraph.replace(/\*\*/g, '');
          return (
            <h3 key={index} className="text-xl font-semibold text-shark-blue mt-8 mb-4">
              {headerText}
            </h3>
          );
        }
        
        // Check if this is a simple header without colon
        if (trimmedParagraph.startsWith('**') && trimmedParagraph.endsWith('**') && !trimmedParagraph.includes(':')) {
          const headerText = trimmedParagraph.replace(/\*\*/g, '');
          return (
            <h3 key={index} className="text-lg font-semibold text-shark-navy mt-6 mb-3">
              {headerText}
            </h3>
          );
        }
        
        // Handle lists - check if paragraph contains multiple list items
        if (trimmedParagraph.includes('\n- ')) {
          const listItems = trimmedParagraph.split('\n').filter(line => line.trim().startsWith('- '));
          return (
            <ul key={index} className="my-6 space-y-2">
              {listItems.map((item, itemIndex) => {
                const listContent = item.substring(2); // Remove "- "
                const parts = listContent.split(/\*\*(.*?)\*\*/);
                
                return (
                  <li key={itemIndex} className="text-gray-700 leading-relaxed list-disc ml-6 marker:text-shark-blue">
                    {parts.map((part, partIndex) => {
                      if (partIndex % 2 === 1) {
                        // Check if it's a metric/company name
                        const isHighlight = /[\d₹%]/.test(part) || ['Mahindra', 'Tata Motors', 'Bajaj Auto', 'Zomato', 'Paytm', 'Flipkart'].some(company => part.includes(company));
                        return (
                          <strong 
                            key={partIndex} 
                            className={`font-semibold ${isHighlight ? 'text-shark-navy bg-shark-gold/20 px-1 rounded' : 'text-shark-navy'}`}
                          >
                            {part}
                          </strong>
                        );
                      }
                      return part;
                    })}
                  </li>
                );
              })}
            </ul>
          );
        }
        
        // Regular paragraph - handle bold text and create proper spacing
        const parts = trimmedParagraph.split(/\*\*(.*?)\*\*/);
        
        return (
          <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
            {parts.map((part, partIndex) => {
              if (partIndex % 2 === 1) {
                // Enhanced highlighting for different types of content
                const isMetric = /[\d₹%]/.test(part);
                const isCompany = ['Zomato', 'Paytm', 'Flipkart', 'Jugaad Patches', 'Mahindra', 'Tata Motors', 'Bajaj Auto'].some(company => part.includes(company));
                const isTerm = ['CAC', 'CLV', 'TAM', 'Valuation', 'Unit Economics'].some(term => part.includes(term));
                
                let className = 'font-semibold text-shark-navy';
                
                if (isMetric) {
                  className = 'font-bold text-shark-navy bg-shark-gold/25 px-2 py-0.5 rounded-md';
                } else if (isCompany) {
                  className = 'font-semibold text-shark-blue bg-blue-50 px-1 rounded';
                } else if (isTerm) {
                  className = 'font-bold text-shark-navy';
                }
                
                return (
                  <strong key={partIndex} className={className}>
                    {part}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
}