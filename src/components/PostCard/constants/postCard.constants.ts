import HeartIcon from '../../../assets/heart.svg';
import SendIcon from '../../../assets/send-2.svg';
import CommentIcon from '../../../assets/comment-text.svg';

export const POST_CARD_CONSTANTS = {
  AVATAR: {
    SIZE: 40,
    DEFAULT_URL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    BORDER_RADIUS: 'rounded-lg',
  },
  ICON: {
    SIZE: 18,
    GAP: 8, 
  },
  SPACING: {
    CARD_PADDING: 'p-2',
    CONTENT_PADDING: 'p-2',
    MARGIN_BOTTOM: 'mb-6',
    USER_SPACE: 'space-x-3',
    CONTENT_SPACE: 'space-x-3',
    ACTION_PADDING_TOP: 'pt-4',
    ACTION_PADDING_BOTTOM: 'pb-2.5',
    ACTION_PADDING_X: 'px-2',
  },
  COLORS: {
    CARD_BG: 'bg-black/5',
    INNER_BG: 'bg-white',
    BORDER: 'border-black/10',
    USER_NAME: 'text-gray-900',
    TIMESTAMP: 'text-black/40',
    CONTENT: 'text-gray-700',
    EMOJI_BG: 'bg-gray-100',
  },
  BORDER_RADIUS: {
    CARD: 'rounded-xl',
    INNER: 'rounded-[10px]',
    EMOJI: 'rounded-full',
    FOCUS: 'rounded',
  },
  INTERACTIVE: {
    FOCUS_STYLES: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
    HOVER_STYLES: 'hover:bg-gray-100',
    TRANSITION: 'transition-colors',
    BUTTON_PADDING: 'p-1',
  },
} as const;

export const POST_ACTION_CONFIG = {
  like: { 
    icon: HeartIcon, 
    label: 'Like',
    activeClass: 'filter-red'
  },
  comment: { 
    icon: CommentIcon, 
    label: 'Comment',
    activeClass: '' 
  },
  share: { 
    icon: SendIcon, 
    label: 'Share',
    activeClass: '' 
  },
} as const;

export type PostAction = keyof typeof POST_ACTION_CONFIG;

export const ERROR_MESSAGES = {
  NOT_IMPLEMENTED: (action: string) => `${action} function not implemented`,
  INVALID_POST: 'Invalid post data provided',
  MISSING_USER: 'Post must contain user information',
} as const;

export const DEFAULTS = {
  CLASS_NAME: '',
  AVATAR_ALT: (name: string) => `${name}'s avatar`,
  ACTION_ARIA_LABEL: (action: string, userName: string, isActive?: boolean) => 
    `${isActive ? `Un${action.toLowerCase()}` : action} post by ${userName}`,
} as const;