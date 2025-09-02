interface User {
    id: string;
    name: string;
    avatar: string;
  }
interface Post {
    id: string;
    user: User;
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    shares: number;
    emoji: string;
  }
export const mockPosts: Post[] = [
    {
      id: '1',
      user: { id: '1', name: 'Theresa Webb', avatar: '/api/placeholder/40/40' },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      timestamp: '1 mins ago',
      likes: 12,
      comments: 5,
      shares: 2,
      emoji: '😊'
    },
    {
      id: '2',
      user: { id: '2', name: 'John Doe', avatar: '/api/placeholder/40/40' },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      timestamp: '5 mins ago',
      likes: 8,
      comments: 3,
      shares: 1,
      emoji: '👍'
    },
    {
      id: '3',
      user: { id: '3', name: 'Jane Doe', avatar: '/api/placeholder/40/40' },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      timestamp: '5 mins ago',
      likes: 15,
      comments: 7,
      shares: 3,
      emoji: '🌟'
    }
  ];