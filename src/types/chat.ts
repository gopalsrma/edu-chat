export type Subject = 'math' | 'science' | 'history' | 'literature' | 'general';

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  subject: Subject;
}

export interface EducationalTopic {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface SubjectContent {
  welcome: string;
  topics: EducationalTopic[];
  defaultQuestions: string[];
}