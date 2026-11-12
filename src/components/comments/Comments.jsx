import { useState } from "react";
import { useProfile } from "../../context/ProfileContext.jsx";
import UserAvatar from "../UserAvatar.jsx";
import CommentForm from "./CommentForm.jsx";
import CommentItem from "./CommentItem.jsx";

const initialComments = [
  {
    id: "comment-maya",
    authorId: "maya",
    text: "I really enjoyed seeing how everyone's projects are coming together.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    likedBy: ["aarav"],
    replies: [
      {
        id: "reply-aarav",
        authorId: "aarav",
        text: "Thanks, Maya! The feedback has been really helpful.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        likedBy: [],
        replies: [
          {
            id: "reply-kabir",
            authorId: "kabir",
            text: "Agreed. Looking forward to sharing the next update.",
            createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
            likedBy: [],
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "comment-kabir",
    authorId: "kabir",
    text: "What is everyone working on this week?",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    likedBy: [],
    replies: [],
  },
];

function createComment(authorId, text) {
  return {
    id: crypto.randomUUID(),
    authorId,
    text,
    createdAt: new Date().toISOString(),
    likedBy: [],
    replies: [],
  };
}

function countComments(comments) {
  return comments.reduce(
    (total, comment) => total + 1 + countComments(comment.replies),
    0,
  );
}

function updateComment(comments, targetId, update) {
  return comments.map((comment) => {
    if (comment.id === targetId) {
      return update(comment);
    }

    return {
      ...comment,
      replies: updateComment(comment.replies, targetId, update),
    };
  });
}

function deleteComment(comments, targetId) {
  return comments
    .filter((comment) => comment.id !== targetId)
    .map((comment) => ({
      ...comment,
      replies: deleteComment(comment.replies, targetId),
    }));
}

function Comments() {
  const { currentUser } = useProfile();
  const [comments, setComments] = useState(initialComments);

  const handleAddComment = (text) => {
    const newComment = createComment(currentUser.id, text);
    setComments((currentComments) => [
      newComment,
      ...currentComments,
    ]);
  };

  const handleAddReply = (targetId, text) => {
    const reply = createComment(currentUser.id, text);
    setComments((currentComments) =>
      updateComment(currentComments, targetId, (comment) => ({
        ...comment,
        replies: [...comment.replies, reply],
      })),
    );
  };

  const handleToggleLike = (targetId) => {
    setComments((currentComments) =>
      updateComment(currentComments, targetId, (comment) => {
        const alreadyLiked = comment.likedBy.includes(currentUser.id);

        return {
          ...comment,
          likedBy: alreadyLiked
            ? comment.likedBy.filter((userId) => userId !== currentUser.id)
            : [...comment.likedBy, currentUser.id],
        };
      }),
    );
  };

  const handleDelete = (targetId) => {
    setComments((currentComments) =>
      deleteComment(currentComments, targetId),
    );
  };

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <header className="border-b border-gray-200 px-4 py-4 sm:px-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Comments ({countComments(comments)})
        </h1>
      </header>

      <div className="flex items-start gap-3 border-b border-gray-200 p-4 sm:p-6">
        <UserAvatar size="medium" user={currentUser} />
        <div className="min-w-0 flex-1">
          <CommentForm onSubmit={handleAddComment} submitLabel="Post" />
        </div>
      </div>

      <div className="space-y-4 p-4 sm:p-6">
        {comments.map((comment) => (
          <CommentItem
            comment={comment}
            key={comment.id}
            onAddReply={handleAddReply}
            onDelete={handleDelete}
            onToggleLike={handleToggleLike}
          />
        ))}
      </div>
    </section>
  );
}

export default Comments;
