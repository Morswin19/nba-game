import Cell from "./Cell";

export default function TableRow({team, teams}){

    return (
        <tr>
            <td className='bg-blue-600 text-white text-center font-semibold'>
                <p>{team}</p>
            </td>
            {teams.map(opp => <Cell team={team} opp={opp}/>)}
        </tr>
    )
}