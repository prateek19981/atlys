import type { AuthMode, TextContent, IconSize } from "./auth.interface";

export const ANIMATION_DURATION: number = 200;
export const LOADING_SIMULATION_TIME: number = 1000;

export const GRADIENTS = {
  border: "from-blue-500 via-purple-500 to-pink-500",
  button: "from-blue-600 to-purple-600",
  text: "from-gray-900 to-gray-600",
  buttonHover: "hover:shadow-xl",
} as const;

export const BACKGROUNDS = {
  backdrop: {
    visible: "bg-black/60 backdrop-blur-sm",
    hidden: "bg-black/0",
  },
  modal: "bg-white",
  iconContainer: "bg-gray-50",
  loadingOverlay: "bg-gradient-to-r from-blue-600 to-purple-600",
  loadingPulse: "bg-white/20",
} as const;

export const BORDER_RADIUS = {
  modal: "rounded-3xl",
  input: "rounded-xl",
  iconContainer: "rounded-full",
} as const;

export const SPACING = {
  modal: "p-8",
  container: "p-4",
  input: "px-4 py-3",
  inputRight: "pr-12",
  border: "p-[2px]",
} as const;

export const TRANSFORMS = {
  modal: {
    visible: "scale-100 opacity-100 translate-y-0",
    hidden: "scale-95 opacity-0 translate-y-8",
  },
  button: {
    hover: "hover:scale-[1.02] transform",
    disabled: "disabled:transform-none",
  },
  link: {
    hover: "hover:scale-105 transform",
  },
  input: "transform",
} as const;

export const FOCUS_STATES = {
  input: "focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500",
  button: "focus:ring-4 focus:ring-blue-500/30",
} as const;

export const BORDERS = {
  input: {
    default: "border-2 border-gray-200",
    hover: "hover:border-gray-300",
  },
} as const;

export const SIZES = {
  modal: "max-w-md",
  iconContainer: "h-[53px] w-[53px]",
  spinner: "w-5 h-5",
  icon: { height: 20, width: 20 } as IconSize,
} as const;

export const TYPOGRAPHY = {
  heading: {
    size: "text-[20px]",
    weight: "font-bold",
    gradient: "bg-clip-text text-transparent",
  },
  description: {
    size: "text-[14px]",
    color: "text-black/48",
  },
  label: {
    size: "text-sm",
    weight: "font-semibold",
    color: "text-gray-700",
  },
  button: {
    weight: "font-semibold",
    size: "text-lg",
  },
  toggleText: "text-gray-600",
} as const;

export const LAYOUT = {
  modal: {
    position: "fixed inset-0 z-50",
    flex: "flex items-center justify-center",
  },
  content: {
    position: "relative",
    width: "w-full",
  },
  iconWrapper: "flex justify-center items-center",
  textCenter: "flex justify-center items-center",
  inputContainer: "flex flex-col items-start",
  buttonContent: "flex items-center justify-center gap-2",
} as const;

export const TRANSITIONS = {
  all: "transition-all duration-300 ease-out",
  fast: "transition-all duration-200",
  backdrop: "transition-all duration-300 ease-out",
} as const;

export const SHADOWS = {
  modal: "shadow-2xl",
  button: {
    default: "shadow-lg",
    hover: "hover:shadow-xl",
    disabled: "disabled:shadow-lg",
  },
} as const;

export const STATE_STYLES = {
  disabled: {
    opacity: "disabled:opacity-50",
    cursor: "disabled:cursor-not-allowed",
  },
  loading: {
    animation: "animate-pulse",
    spinner: "animate-spin",
  },
} as const;

export const TEXT_CONTENT: Record<AuthMode, TextContent> = {
  signin: {
    title: "Sign in to continue",
    description: "Sign in to access all the features of this app",
    button: "Sign In",
    togglePrompt: "Don't have an account?",
    toggleAction: "Create one now",
  },
  signup: {
    title: "Create an account to continue",
    description: "Create an account to access all features of this app",
    button: "Create an account to continue",
    togglePrompt: "Already have an account?",
    toggleAction: "Sign in instead",
  },
} as const;

export const LABELS = {
  fullName: "Full Name",
  email: "Email Address",
  password: "Password",
} as const;

export const PLACEHOLDERS = {
  name: "Enter your name",
  email: "Enter your email",
  password: "Enter your password",
} as const;

export const LOADING_TEXT = "Please wait...";

export const MOCK_DATA = {
  defaultUser: {
    name: "John Doe",
    avatar: "/api/placeholder/40/40",
  },
} as const;


export const MOCK_USERS = [
  { 
    id: 1, 
    email: 'demo@example.com', 
    password: 'password123', 
    name: 'John Doe' 
  },
  { 
    id: 2, 
    email: 'test@user.com', 
    password: 'testpass', 
    name: 'Admin User' 
  }
];