import { Link } from "react-router"

export default function OneCard({
  _id,
  date,
  genre,
  imageUrl,
  players,
  summary,
  title,
  price,
}) {
  return (

    <div key='id' className="group relative">
      <div className="relative group">
        <img

          alt={imageUrl}
          src={imageUrl}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-100"
        />

       <Link 
  to={`/catalog/${_id}/details`}
  className="
    absolute inset-0 flex items-center justify-center 
    text-white text-xl font-bold 
    opacity-0 group-hover:opacity-100 
    transition duration-300 
    cursor-pointer 
    z-10
  "
>
  View Details
</Link>



      </div>


      <div className="mt-5 flex justify-between">
        <div>
          <h3 className="text-sm text-white">

            <span aria-hidden="true" className="absolute inset-0" />
            {title}

          </h3>

        </div>
      </div>
    </div>


  )
}