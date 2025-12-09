
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

export default function Comments() {

  const { user } = useContext(AuthContext);
  
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  function commentHanlder(event) {
    setText(event.target.value);
  }

  function submitComments() {
    if (text.trim() === '') return;

    const newComment = {
      id: Date.now(),          
      user: user?.email,
      text: text,
    };

    setComments((oldComments) => [...oldComments, newComment]);
    setText('');
  }

  return (
    <section className="mt-16 max-w-5xl mx-auto border-t border-gray-700 pt-10">

      <h2 className="text-3xl font-bold text-purple-400 mb-8 text-center">
        💬 Comments Section
      </h2>

      {/* INPUT */}
      <div className="mb-10">
        <textarea
          onChange={commentHanlder}
          value={text}
          rows="4"
          placeholder="Leave a comment ..."
          className="w-full rounded-xl bg-gray-900 text-white p-4 resize-none border border-gray-700"
        />

        <button
          onClick={submitComments}
          className="mt-3 px-6 py-2 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700"
        >
          Post Comment
        </button>
      </div>

      {/* RENDER COMMENTS */}
      <div className="space-y-6">

        {comments.length === 0 ? (
          <p className="text-gray-500 italic text-center">
            No comments yet.
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-lg mb-4"
            >
              <div className="flex justify-between mb-2">
                <span className="text-purple-400 font-semibold">
                  {comment.user}
                </span>
              </div>
              <p className="text-gray-200">
                {comment.text}
              </p>
            </div>
          ))
        )}

      </div>
    </section>
  );
}
