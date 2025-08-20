import React from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-green-500 p-2 rounded-xl">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                EduChat
              </h1>
              <p className="text-sm text-gray-600">Interactive Learning Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 px-3 py-1 rounded-full border border-purple-200">
            <Sparkles className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">AI Powered</span>
          </div>
        </div>
      </div>
    </header>
  );
};