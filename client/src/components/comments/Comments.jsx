
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import CommentSection from "../commentsSection/CommentSection";


export default function Comments() {

    const { user } = useContext(AuthContext);

    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);

    function commentHandler(event) {
        setText(event.target.value);
    };

    function submitComments() {
        if (text.trim() === '') {
            return;
        };

        const newComments = {
            id: Date.now(),
            time: new Date().toLocaleTimeString(),
            user: user.email,
            text: text,
        };

        setComments((oldComments) => [...oldComments, newComments]);
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
                    onChange={commentHandler}
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

                
                    {comments.map((comment)=><CommentSection key={comment.id} {...comment}/>)}
                

                

            </div>
        </section>
    );
}
