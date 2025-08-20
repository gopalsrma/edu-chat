import React, { useState } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { TopicSelector } from './components/TopicSelector';
import { Header } from './components/Header';
import { educationalContent } from './data/educationalContent';
import type { Subject, Message } from './types/chat';

function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>('math');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm EduBot, your educational assistant. I can help you learn about Math, Science, History, and Literature. What would you like to explore today?",
      sender: 'bot',
      timestamp: new Date(),
      subject: 'general'
    }
  ]);

  const handleSubjectChange = (subject: Subject) => {
    setSelectedSubject(subject);
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      content: `Great choice! Let's explore ${subject}. ${educationalContent[subject].welcome}`,
      sender: 'bot',
      timestamp: new Date(),
      subject
    };
    setMessages(prev => [...prev, welcomeMessage]);
  };

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 via-pink-50 to-orange-100 relative overflow-hidden">
      {/* Educational Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-10 w-18 h-18 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <Header />
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/50 relative">
          {/* Decorative border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl opacity-20 blur-sm"></div>
          <div className="relative bg-white rounded-2xl">
          <TopicSelector 
            selectedSubject={selectedSubject}
            onSubjectChange={handleSubjectChange}
          />
          <ChatInterface 
            messages={messages}
            selectedSubject={selectedSubject}
            onAddMessage={addMessage}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;