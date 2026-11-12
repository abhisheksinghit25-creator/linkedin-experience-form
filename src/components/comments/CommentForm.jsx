import { useState } from "react";

function CommentForm({
  onSubmit,
  placeholder = "Write a comment...",
  submitLabel = "Comment",
  onCancel,
}) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    onSubmit(trimmedText);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        aria-label={placeholder}
        className="w-full resize-y rounded-lg border border-gray-700 bg-[#1a1a1a] p-3 text-white outline-none focus:border-blue-500"
        onChange={(event) => setText(event.target.value)}
        placeholder={placeholder}
        rows={3}
        value={text}
      />

      <div className="flex justify-end gap-2">
        {onCancel && (
          <button
            className="rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
            onClick={onCancel}
            type="button"
          >
            Cancel
          </button>
        )}
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!text.trim()}
          type="submit"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

export default CommentForm;