export interface User {
    id: string;
    name: string;
    avatar: string;
  }



export  interface Post {
    id: string;
    user: User;
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    shares: number;
    emoji: string;
  }