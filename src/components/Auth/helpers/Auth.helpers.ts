import { MOCK_USERS } from '../constants/auth.constants';
import type { AuthMode } from '../constants/auth.interface';

export const validateAuthForm = (email: string, password: string, name: string, mode: AuthMode): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email || !emailRegex.test(email)) return false;
  if (!password || password.length < 6) return false;
  if (mode === 'signup' && (!name || name.trim().length < 2)) return false;
  
  return true;
};

export const simulateAuth = async (mode: AuthMode, email: string, password: string, name: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (mode === 'signin') {
    const user = MOCK_USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    
    if (user) {
      return {
        success: true,
        user: {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          avatar: '/api/placeholder/40/40' // Default avatar
        }
      };
    } else {
      return {
        success: false,
        error: 'Invalid email or password. Please check your credentials and try again.'
      };
    }
  } else {
    const existingUser = MOCK_USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase()
    );
    
    if (existingUser) {
      return {
        success: false,
        error: 'An account with this email already exists. Please use a different email or try logging in.'
      };
    } else {
      const newUser = {
        id: MOCK_USERS.length + 1,
        email: email.toLowerCase(),
        password: password,
        name: name.trim()
      };
      
      MOCK_USERS.push(newUser);
      
      return {
        success: true,
        user: {
          id: newUser.id.toString(),
          email: newUser.email,
          name: newUser.name,
          avatar: '/api/placeholder/40/40' // Default avatar
        }
      };
    }
  }
};

export const toggleBodyScroll = (disable: boolean): void => {
  if (typeof document !== 'undefined') {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
};