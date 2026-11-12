import CommentForm from "./CommentForm.jsx";

function ReplyForm({ onSubmit, onCancel }) {
  return (
    <CommentForm
      onCancel={onCancel}
      onSubmit={onSubmit}
      placeholder="Write a reply..."
      submitLabel="Reply"
    />
  );
}

export default ReplyForm;
