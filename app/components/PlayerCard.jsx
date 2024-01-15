import { useEffect, useState } from "react";

async function getStats (){
    let page = 1;
    let stats = [];

    while(true){
        const res = await fetch(`https://www.balldontlie.io/api/v1/stats?player_ids[]=192&per_page=100&page=${page}`)
        const json = await res.json();

        stats = stats.concat(json.data);
    
        if (json.meta.next_page === null) {
          break;
        }

        page += 1;
    }
    

    return stats
}

export default function PlayerCard({id, first, last}){
    const [playersData, setPlayersData] = useState()
    const [teams, setTeams] = useState([])

    const getPlayersData = async() => {
        const data = await getStats();
        setPlayersData(data.data)
        console.log(data.filter(stat => stat.id < 235800))
        console.log(data)
    }

    useEffect(() => {
        getPlayersData()
      }, []);

    return (
        <>
            <p>{first} {last} {id}</p>
            <p>{playersData && playersData.filter(stat => stat.player.id === id)[0].pts}</p>
            <p>Total Points: 40000</p>
        </>
    )
}