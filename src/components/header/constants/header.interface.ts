export interface User {
    id: string;
    name: string;
    avatar: string;
  }
  
  export interface HeaderProps {
    user: User | null;
    handleLogout: () => void;
    setIsAuthModalOpen: (isOpen: boolean) => void;
  }