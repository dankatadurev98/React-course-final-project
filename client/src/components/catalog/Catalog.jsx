import { useEffect, useState } from "react";
import OneCard from "../oneCard/OneCard";

export default function Catalog() {

  const [games, setGames] = useState([]);



  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/games')
      .then(res =>
        res.json()
      )
      .then(data => {
        let info = Object.values(data)
        setGames(info)
        console.log(info);
        
      })
      .catch(info => {
        console.log(info)
      })
  }, [])
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white text-center pb-10 ">Games</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {games.map(game=><OneCard key={game._id} {...game}/>)}
        </div>
      </div>
    </div>
  )
}
