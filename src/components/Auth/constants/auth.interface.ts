export interface User {
    id: string;
    name: string;
    avatar: string;
  }
  
  export interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: 'signin' | 'signup';
    onToggleMode: () => void;
    onAuth: (user: User) => void;
  }
  
  export type AuthMode = 'signin' | 'signup';
  
  export interface TextContent {
    title: string;
    description: string;
    button: string;
    togglePrompt: string;
    toggleAction: string;
  }
  
  export interface IconSize {
    height: number;
    width: number;
  }