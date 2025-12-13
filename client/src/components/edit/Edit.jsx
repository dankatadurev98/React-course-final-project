import { useEffect, useState,useContext } from "react"
import { api, endpoints } from "../../requests/requests"
import { useParams,useNavigate } from "react-router"
import { AuthContext } from "../../context/authContext"

export default function Edit(){

  const {_id} = useParams()
  const [data,setData] = useState({})
  const {user} = useContext(AuthContext)
  const navigator = useNavigate();


  useEffect(()=>{
    api.get(endpoints.gamesById(_id))
    .then(res=>{
      setData(res)
      
      
    })
    .catch(data=>{
      console.log(`problem with edit form fetch of data`)
    })
  },[_id]);

  function onEditHandler(formData){

    let data = Object.fromEntries(formData)
    
    api.put(endpoints.gamesById(_id),data,user.token)
    .then(res=>{
      navigator('/catalog')
      console.log(res);
    })
    .catch(data=>{
     console.log(`A problem with edit put request!`);
     
    })
    
  }

    return(

    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6">
      <form className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-xl" action={onEditHandler}>

        <h2 className="text-3xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Edit Game
        </h2>

        {/* TITLE */}
        <label className="block text-purple-300 mb-2">Title:</label>
        <input
        defaultValue={data.title}
          type="text"
          name="title"
          required
          className="w-full p-3 rounded-md bg-gray-700 text-white mb-4 focus:outline-none focus:ring focus:ring-purple-500"
        />

        {/* GENRE */}
        <label className="block text-purple-300 mb-2">Genre:</label>
        <input
        defaultValue={data.genre}
          type="text"
          name="genre"
          required
          className="w-full p-3 rounded-md bg-gray-700 text-white mb-4 focus:outline-none focus:ring focus:ring-purple-500"
        />
          {/* PRICE */}
        <label className="block text-purple-300 mb-2">Price:</label>
        <input
        defaultValue={data.price}
          type="number"
          name="price"
          required
          className="w-full p-3 rounded-md bg-gray-700 text-white mb-4 focus:outline-none focus:ring focus:ring-purple-500"
        />

        {/* IMAGE URL */}
        <label className="block text-purple-300 mb-2">Image URL:</label>
        <input
        defaultValue={data.imageUrl}
          type="text"
          name="imageUrl"
          required
          className="w-full p-3 rounded-md bg-gray-700 text-white mb-4 focus:outline-none focus:ring focus:ring-purple-500"
        />

        {/* DATE */}
        <label className="block text-purple-300 mb-2">Release Date:</label>
        <input
        defaultValue={data.date}
          type="date"
          name="date"
          required
          className="w-full p-3 rounded-md bg-gray-700 text-white mb-4 focus:outline-none focus:ring focus:ring-purple-500"
        />

        {/* SUMMARY */}
        <label className="block text-purple-300 mb-2">Summary:</label>
        <textarea
        defaultValue={data.summary}
          name="summary"
          rows="4"
          required
          className="w-full p-3 rounded-md bg-gray-700 text-white mb-6 focus:outline-none focus:ring focus:ring-purple-500"
        ></textarea>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full mt-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md transition"
        >
          Edit Game
        </button>
      </form>
    </div>
  


    )
}