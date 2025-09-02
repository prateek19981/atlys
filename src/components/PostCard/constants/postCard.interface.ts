import type { User } from "../../PostEditor/constants/PostEditor.interface";

export type PostAction = 'like' | 'comment' | 'share';


export interface Post {
    id: string;
    user: User;
    content: string;
    emoji: string;
    timestamp: string;
    likes?: number;
    comments?: number;
    shares?: number;
    isLiked?: boolean;
  }

  export interface PostCardProps {
    post: Post;
    onInteraction?: (action: PostAction, postId: string, data?: any) => void;
    className?: string;
  }