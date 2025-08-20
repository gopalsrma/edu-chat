import React from 'react';
import { Bot } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start space-x-3 justify-start">
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 shadow-lg">
        <Bot className="h-4 w-4 text-white" />
      </div>
      
      <div className="bg-gradient-to-br from-white to-purple-50/50 border border-purple-200/50 rounded-2xl rounded-bl-md px-4 py-3 shadow-lg">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};