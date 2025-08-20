import React from 'react';
import { Bot, User } from 'lucide-react';
import type { Message } from '../types/chat';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex items-start space-x-3 ${isBot ? 'justify-start' : 'justify-end flex-row-reverse space-x-reverse'}`}>
      <div className={`
        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
        ${isBot 
          ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 shadow-lg' 
          : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg'
        }
      `}>
        {isBot ? (
          <Bot className="h-4 w-4 text-white" />
        ) : (
          <User className="h-4 w-4 text-white" />
        )}
      </div>
      
      <div className={`
        max-w-[80%] px-4 py-3 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md
        ${isBot 
          ? 'bg-gradient-to-br from-white to-purple-50/50 border border-purple-200/50 text-gray-800 shadow-lg' 
          : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg'
        }
        ${isBot ? 'rounded-bl-md' : 'rounded-br-md'}
      `}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        <span className={`
          text-xs mt-2 block
          ${isBot ? 'text-purple-500' : 'text-purple-100'}
        `}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};