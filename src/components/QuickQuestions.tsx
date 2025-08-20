import React from 'react';
import { educationalContent } from '../data/educationalContent';
import type { Subject } from '../types/chat';

interface QuickQuestionsProps {
  subject: Subject;
  onQuestionClick: (question: string) => void;
}

export const QuickQuestions: React.FC<QuickQuestionsProps> = ({ subject, onQuestionClick }) => {
  if (subject === 'general') return null;

  const questions = educationalContent[subject].defaultQuestions;

  return (
    <div className="p-4 border-t border-purple-100/50 bg-gradient-to-r from-purple-50/50 via-pink-50/50 to-orange-50/50">
      <p className="text-sm text-purple-700 font-medium mb-3">✨ Quick questions to get started:</p>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="px-4 py-2 bg-gradient-to-r from-white to-purple-50 text-sm text-purple-700 rounded-full border border-purple-200/50 hover:from-purple-100 hover:to-pink-100 hover:border-purple-300 hover:text-purple-800 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md font-medium"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};