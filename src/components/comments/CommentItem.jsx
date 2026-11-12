import { useState } from "react";
import { useProfile } from "../../context/ProfileContext.jsx";
import UserAvatar from "../UserAvatar.jsx";
import ReplyForm from "./ReplyForm.jsx";

function CommentItem({ comment, onAddReply, onDelete, onToggleLike }) {
  const { currentUser, usersById } = useProfile();
  const [isReplying, setIsReplying] = useState(false);
  const author = usersById[comment.authorId];
  const isLiked = comment.likedBy.includes(currentUser.id);
  const canDelete = comment.authorId === currentUser.id;

  const handleReply = (text) => {
    onAddReply(comment.id, text);
    setIsReplying(false);
  };

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <UserAvatar size="medium" user={author} />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
            <div className="min-w-0">
              <p className="font-semibold leading-5 text-gray-900">
                {author.fullName}
              </p>
              <p className="text-xs text-gray-500">{author.title}</p>
            </div>
            <time
              className="text-xs text-gray-500"
              dateTime={comment.createdAt}
            >
              {new Date(comment.createdAt).toLocaleString()}
            </time>
          </div>

          <p className="mt-3 whitespace-pre-wrap break-words text-sm text-gray-800">
            {comment.text}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-100 pt-2">
            <button
              aria-pressed={isLiked}
              className={`text-sm font-semibold ${
                isLiked ? "text-[#0a66c2]" : "text-gray-600 hover:text-[#0a66c2]"
              }`}
              onClick={() => onToggleLike(comment.id)}
              type="button"
            >
              Like{comment.likedBy.length > 0 && ` · ${comment.likedBy.length}`}
            </button>
            <button
              className="text-sm font-semibold text-gray-600 hover:text-[#0a66c2]"
              onClick={() => setIsReplying((replying) => !replying)}
              type="button"
            >
              {isReplying ? "Cancel reply" : "Reply"}
            </button>
            {canDelete && (
              <button
                className="text-sm font-semibold text-gray-600 hover:text-red-600"
                onClick={() => onDelete(comment.id)}
                type="button"
              >
                Delete
              </button>
            )}
          </div>

          {isReplying && (
            <div className="mt-3">
              <ReplyForm
                onCancel={() => setIsReplying(false)}
                onSubmit={handleReply}
              />
            </div>
          )}

          {comment.replies.length > 0 && (
            <div className="mt-4 space-y-3 border-l-2 border-gray-200 pl-3 sm:pl-5">
              {comment.replies.map((reply) => (
                <CommentItem
                  comment={reply}
                  key={reply.id}
                  onAddReply={onAddReply}
                  onDelete={onDelete}
                  onToggleLike={onToggleLike}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default CommentItem;
