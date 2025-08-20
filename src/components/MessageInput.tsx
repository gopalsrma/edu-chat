import React, { useState, KeyboardEvent } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-purple-200/50 bg-gradient-to-r from-white via-purple-50/30 to-pink-50/30">
      <div className="flex items-end space-x-3">
        <div className="flex-1">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about the selected subject..."
            disabled={disabled}
            rows={1}
            className="w-full px-4 py-3 border border-purple-300/50 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500 bg-white/80 backdrop-blur-sm"
            style={{ minHeight: '48px', maxHeight: '120px' }}
          />
        </div>
        <button
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed hover:shadow-xl transform hover:scale-105 active:scale-95 shadow-lg"
        >
          {disabled ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};