import React from 'react';
import { Calculator, Atom, Clock, BookOpen } from 'lucide-react';
import type { Subject } from '../types/chat';

interface TopicSelectorProps {
  selectedSubject: Subject;
  onSubjectChange: (subject: Subject) => void;
}

export const TopicSelector: React.FC<TopicSelectorProps> = ({
  selectedSubject,
  onSubjectChange
}) => {
  const subjects = [
    { id: 'math' as Subject, name: 'Mathematics', icon: Calculator, color: 'from-blue-500 to-indigo-600', bgColor: 'from-blue-50 to-indigo-100' },
    { id: 'science' as Subject, name: 'Science', icon: Atom, color: 'from-green-500 to-emerald-600', bgColor: 'from-green-50 to-emerald-100' },
    { id: 'history' as Subject, name: 'History', icon: Clock, color: 'from-amber-500 to-orange-600', bgColor: 'from-amber-50 to-orange-100' },
    { id: 'literature' as Subject, name: 'Literature', icon: BookOpen, color: 'from-purple-500 to-pink-600', bgColor: 'from-purple-50 to-pink-100' }
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-6 border-b border-purple-200/50">
      <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-4">Choose Your Learning Adventure</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {subjects.map((subject) => {
          const Icon = subject.icon;
          const isSelected = selectedSubject === subject.id;
          
          return (
            <button
              key={subject.id}
              onClick={() => onSubjectChange(subject.id)}
              className={`
                relative p-4 rounded-xl transition-all duration-300 transform hover:scale-105
                ${isSelected 
                  ? `bg-gradient-to-br ${subject.color} text-white shadow-xl border-2 border-white` 
                  : `bg-gradient-to-br ${subject.bgColor} text-gray-700 hover:shadow-lg shadow-md border border-white/50`
                }
              `}
            >
              <div className="flex flex-col items-center space-y-2">
                <Icon className={`h-7 w-7 ${isSelected ? 'text-white' : 'text-gray-700'}`} />
                <span className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-gray-700'}`}>{subject.name}</span>
              </div>
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse shadow-lg"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};