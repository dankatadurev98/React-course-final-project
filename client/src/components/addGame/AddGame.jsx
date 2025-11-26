import { useNavigate } from "react-router"
import { api,endpoints } from "../../requests/requests";

export default function AddGame() {

  let navigator = useNavigate();

  function onSubmitForm(formData) {



    let data = Object.fromEntries(formData)

    let fields = {
      title: data.title,
      imageUrl: data.imageUrl,
      price: data.price,
      genre: data.genre,
      date: data.date,
      summary: data.summary,
    }
   

    api.post(endpoints.games, fields)
      .then(res => {
        console.log(res);
        console.log('Successful POST Request!');
        navigator('/catalog')
      })
      .catch(err => {
        console.log('Problem with POST Request!');
        console.log(err.message);
      });

  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6">
      <form className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-xl" action={onSubmitForm}>

        <h2 className="text-3xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Add New Game
        </h2>

        {/* TITLE */}
        <label className="block text-purple-300 mb-2">Title:</label>
        <input
          type="text"
          name="title"
          className="w-full p-3 rounded-md bg-gray-700 text-white mb-4 focus:outline-none focus:ring focus:ring-purple-500"
        />

        {/* GENRE */}
        <label className="block text-purple-300 mb-2">Genre:</label>
        <input
          type="text"
          name="genre"
          className="w-full p-3 rounded-md bg-gray-700 text-white mb-4 focus:outline-none focus:ring focus:ring-purple-500"
        />

        {/* IMAGE URL */}
        <label className="block text-purple-300 mb-2">Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          className="w-full p-3 rounded-md bg-gray-700 text-white mb-4 focus:outline-none focus:ring focus:ring-purple-500"
        />

        {/* DATE */}
        <label className="block text-purple-300 mb-2">Release Date:</label>
        <input
          type="date"
          name="date"
          className="w-full p-3 rounded-md bg-gray-700 text-white mb-4 focus:outline-none focus:ring focus:ring-purple-500"
        />

        {/* SUMMARY */}
        <label className="block text-purple-300 mb-2">Summary:</label>
        <textarea
          name="summary"
          rows="4"
          className="w-full p-3 rounded-md bg-gray-700 text-white mb-6 focus:outline-none focus:ring focus:ring-purple-500"
        ></textarea>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full mt-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md transition"
        >
          Add Game
        </button>
      </form>
    </div>
  );
}
