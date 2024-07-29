// CopyButtonPage.tsx
import React from 'react';

import CopyButton from '@/components/CopyButton';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const copyButtonCode = `import React, { useState } from 'react';

import { CopyIcon } from '@radix-ui/react-icons';

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center px-2 py-2 border rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      {copied ? <span className="text-xs">Copied!</span> : <CopyIcon className="w-3 h-3" />}
    </button>
  );
};

export default CopyButton;
`;

const copyButtonUsage = `  <div className="p-4">
      <CopyButton text="This is the text to be copied!" />
    </div>
`;

export default function CopyButtonPage() {
  return (
    <ComponentDetail
      usage={copyButtonUsage}
      code={copyButtonCode}
      component={
        <div className="p-4">
          <CopyButton text="This is the text to be copied!" />
        </div>
      }
      name="CopyButton"
      detail="The CopyButton component allows users to copy a specified text to the clipboard with a visual confirmation."
    />
  );
}
