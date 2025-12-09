


export default function CommentSection({
    user,
    time,
    text
}){


    return(

          <div
                            
                            className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-lg mb-4"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-purple-400 font-semibold">
                                    {user}
                                </span>
                                <span className="text-gray-500 text-sm">
                                    {time}
                                </span>

                            </div>
                            <p className="text-gray-200">
                                {text}
                            </p>
                        </div>
    )
}