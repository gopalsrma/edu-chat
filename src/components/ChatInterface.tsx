import React, { useState, useRef, useEffect } from 'react';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';
import { TypingIndicator } from './TypingIndicator';
import { QuickQuestions } from './QuickQuestions';
import { educationalContent } from '../data/educationalContent';
import type { Message, Subject } from '../types/chat';

interface ChatInterfaceProps {
  messages: Message[];
  selectedSubject: Subject;
  onAddMessage: (message: Message) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  selectedSubject,
  onAddMessage
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateBotResponse = (userMessage: string): string => {
    const content = educationalContent[selectedSubject];
    const lowerMessage = userMessage.toLowerCase();

    // Find matching topic based on keywords
    const matchingTopic = content.topics.find(topic =>
      topic.keywords.some(keyword => lowerMessage.includes(keyword.toLowerCase()))
    );

    if (matchingTopic) {
      return matchingTopic.answer;
    }

    // Default responses for different subjects
    const defaultResponses = {
      math: "That's an interesting math question! Let me help you with that. Try asking about specific topics like algebra, geometry, or calculus.",
      science: "Great science question! I can help with topics like physics, chemistry, biology, and more. What specific area interests you?",
      history: "History is fascinating! I can discuss various periods, events, and figures. What time period or topic would you like to explore?",
      literature: "Literature opens up amazing worlds! I can discuss authors, literary devices, genres, and famous works. What interests you most?",
      general: "I'm here to help you learn! Please select a specific subject to get more detailed assistance."
    };

    return defaultResponses[selectedSubject] || "I'd be happy to help you learn more about that topic!";
  };

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
      subject: selectedSubject
    };

    onAddMessage(userMessage);
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: generateBotResponse(content),
      sender: 'bot',
      timestamp: new Date(),
      subject: selectedSubject
    };

    setIsTyping(false);
    onAddMessage(botResponse);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/30 relative">
        {/* Floating educational elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-40 animate-float"></div>
        <div className="absolute bottom-20 left-4 w-6 h-6 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      
      <QuickQuestions 
        subject={selectedSubject}
        onQuestionClick={handleQuickQuestion}
      />
      
      <MessageInput 
        onSendMessage={handleSendMessage}
        disabled={isTyping}
      />
    </div>
  );
};