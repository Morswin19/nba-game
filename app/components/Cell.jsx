"use client"

import {useStore} from "../stores/mainStore"

export default function Cell({team, opp}){
    const changeActivePair = useStore((state) => state.changeActivePair)

    return (
        <td onClick={() => changeActivePair(team, opp)} className="border-blue-600 border-2 border-solid text-xs text-center min-w-20 cursor-pointer">
            <p>{opp} & {team}</p>
        </td>
    )
}