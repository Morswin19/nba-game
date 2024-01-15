"use client"

import { useState } from "react"
import { useStore } from "../stores/mainStore"

import PlayerCard from "./PlayerCard"

async function getPlayersFromApi (query){
    const res = await fetch(`https://www.balldontlie.io/api/v1/players?search=${query}`)

    return res.json()
}

export default function TeamsInput(){
    const teamsPair = useStore((state) => state.activePair)
    const [ searchPlayer, setSearchPlayer ]  = useState('')
    const [ playersFromApi, setPlayersFromApi ] = useState([])
    
    // const data = await getTeams();
    // const teams = data.data
    // const abbreviations = teams.map(team => team.abbreviation)

    const hangdleChangeSearchQuery = (e) => {
        console.log(searchPlayer)
        setSearchPlayer(e.target.value)
    }

    const getPlayers = async (e) => {
        e.preventDefault()
        const res = await getPlayersFromApi(searchPlayer)
        setPlayersFromApi(res.data)
        console.log(res.data)
    }

    return (
        <section>
            <h3 className="m-5 text-center text-2xl text-blue-600">ActivePair: <span className="text-3xl text-white bg-blue-600 p-2 inline rounded-lg">{teamsPair}</span></h3>
            <form className="mb-2">   
                <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input minLength="3" onChange={hangdleChangeSearchQuery} value={searchPlayer} type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    <button onClick={getPlayers} className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <section className="flex">
                <div className="bg-blue-600 text-white my-5 min-w-60 w-1/6 p-4">
                    <p>LeBron James</p>
                    <p>clubs: CLE, MIA, LAL</p>
                    <p>Total Points: 40000</p>
                </div>
                {playersFromApi.map(player => <div className="bg-blue-600 text-white my-5 min-w-60 w-1/6 p-4">
                    <PlayerCard id={player.id} first={player.first_name} last={player.last_name}/>
                </div>)}
            </section>

        </section>
    )
}


