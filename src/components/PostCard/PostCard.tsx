import type { PostAction, PostCardProps } from "./constants/postCard.interface";
import {
  DEFAULTS,
  ERROR_MESSAGES,
  POST_ACTION_CONFIG,
  POST_CARD_CONSTANTS,
} from "./constants/postCard.constants";

const PostCard: React.FC<PostCardProps> = ({ post, className = "" }) => {
  const handleAction = (action: PostAction): void => {
    alert(ERROR_MESSAGES.NOT_IMPLEMENTED(action));
  };

  if (!post || !post.user) {
    return null;
  }

  const avatarUrl: string =
    post.user.avatar || POST_CARD_CONSTANTS.AVATAR.DEFAULT_URL;

  const handleAvatarError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ): void => {
    const target = e.target as HTMLImageElement;
    target.src = POST_CARD_CONSTANTS.AVATAR.DEFAULT_URL;
  };
  const renderActionButton = (action: PostAction) => {
    const config = POST_ACTION_CONFIG[action];

    return (
      <button
        key={action}
        type="button"
        onClick={() => handleAction(action)}
        className={`cursor-pointer ${POST_CARD_CONSTANTS.INTERACTIVE.FOCUS_STYLES} ${POST_CARD_CONSTANTS.BORDER_RADIUS.FOCUS} ${POST_CARD_CONSTANTS.INTERACTIVE.BUTTON_PADDING} ${POST_CARD_CONSTANTS.INTERACTIVE.HOVER_STYLES} ${POST_CARD_CONSTANTS.INTERACTIVE.TRANSITION}`}
        aria-label={DEFAULTS.ACTION_ARIA_LABEL(
          config.label,
          post.user.name,
        )}
      >
        <img
          src={config.icon}
          height={POST_CARD_CONSTANTS.ICON.SIZE}
          width={POST_CARD_CONSTANTS.ICON.SIZE}
          alt={config.label}
          loading="lazy"
        />
      </button>
    );
  };

  return (
    <div
      className={`relative ${POST_CARD_CONSTANTS.SPACING.MARGIN_BOTTOM} h-fit flex flex-col items-center justify-center ${POST_CARD_CONSTANTS.SPACING.CARD_PADDING} ${POST_CARD_CONSTANTS.COLORS.CARD_BG} ${POST_CARD_CONSTANTS.BORDER_RADIUS.CARD} ${className}`}
    >
      <div
        className={`h-full w-full ${POST_CARD_CONSTANTS.COLORS.INNER_BG} ${POST_CARD_CONSTANTS.SPACING.CONTENT_PADDING} ${POST_CARD_CONSTANTS.BORDER_RADIUS.INNER} border ${POST_CARD_CONSTANTS.COLORS.BORDER} mt-0.5`}
      >
        <div
          className={`flex items-start ${POST_CARD_CONSTANTS.SPACING.USER_SPACE} mb-4`}
        >
          <img
            src={avatarUrl}
            alt={DEFAULTS.AVATAR_ALT(post.user.name)}
            className={`w-10 h-10 ${POST_CARD_CONSTANTS.AVATAR.BORDER_RADIUS} object-cover`}
            onError={handleAvatarError}
          />
          <div className="flex-1">
            <div className="flex flex-col items-start">
              <h3
                className={`font-semibold ${POST_CARD_CONSTANTS.COLORS.USER_NAME}`}
              >
                {post.user.name}
              </h3>
              <time
                className={`${POST_CARD_CONSTANTS.COLORS.TIMESTAMP} text-sm font-medium`}
              >
                {post.timestamp}
              </time>
            </div>
          </div>
        </div>
        <div
          className={`flex items-start ${POST_CARD_CONSTANTS.SPACING.CONTENT_SPACE} mb-4`}
        >
          <div
            className={`${POST_CARD_CONSTANTS.COLORS.EMOJI_BG} ${POST_CARD_CONSTANTS.BORDER_RADIUS.EMOJI} p-1.5`}
          >
            <span className="text-2xl" role="img" aria-label="Post emoji">
              {post.emoji}
            </span>
          </div>
          <div className={`${POST_CARD_CONSTANTS.COLORS.CONTENT} flex-1`}>
            {post.content}
          </div>
        </div>
      </div>
      <div
        className={`flex items-center justify-start ${POST_CARD_CONSTANTS.SPACING.ACTION_PADDING_TOP} w-full ${POST_CARD_CONSTANTS.SPACING.ACTION_PADDING_X} rounded-b-2xl ${POST_CARD_CONSTANTS.SPACING.ACTION_PADDING_BOTTOM} gap-[10px]`}
      >
        {(Object.keys(POST_ACTION_CONFIG) as PostAction[]).map(renderActionButton)}
      </div>
    </div>
  );
};

export default PostCard;
