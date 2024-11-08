import React from 'react';
import { TextEffect } from "./core/text-effect";

export function HeroText(): JSX.Element {
  const text = `Your all-in-one
design solution under
one subscription.`;
  
  // Split the text into lines
  const lines = text.split('\n');
  
  // Function to change the color of the last two words only for a specific line
  const modifyLines = (lines: string[]): string[] => {
    return lines.map(line => {
      // Check if the line contains the specific phrase
      if (line.includes("one subscription")) {
        const words = line.split(' ');

        // Change the color of the last two words
        if (words.length >= 2) {
          words[words.length - 2] = `<span style="color: #facc15;">${words[words.length - 2]}</span>`;
          words[words.length - 1] = `<span style="color: #facc15;">${words[words.length - 1]}</span>`;
        }
        return words.join(' ');
      }
      return line; // Return unchanged line if it doesn't match
    });
  };

  const modifiedLines = modifyLines(lines);

  return (
    <TextEffect
      per='line'
      as='p'
      segmentWrapperClassName='overflow-hidden block'
      variants={{
        container: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            y: 40,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
            },
          },
        },
      }}
    >
      {modifiedLines.map((line, index) => (
        <span key={index} dangerouslySetInnerHTML={{ __html: line }} />
      ))}
    </TextEffect>
  );
}