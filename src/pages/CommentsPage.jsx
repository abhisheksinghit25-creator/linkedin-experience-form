import Comments from "../components/comments/Comments.jsx";

function CommentsPage() {
  return (
    <main className="min-h-screen bg-[#f3f2ef] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Comments />
      </div>
    </main>
  );
}

export default CommentsPage;