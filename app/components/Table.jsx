import TableRow from "./TableRow";

async function getTeams (){
    const res = await fetch('https://www.balldontlie.io/api/v1/teams')

    return res.json()
}

export default async function Table(){
    const data = await getTeams();
    const teams = data.data
    const abbreviations = teams.map(team => team.abbreviation)
    
    console.log(abbreviations)

    return (
        <table className="table-auto">
            <thead>
                <tr>
                    <th></th>
                    {abbreviations.map(abbreviation => <th className='bg-blue-600 text-white p-1 text-center font-semibold'>{abbreviation}</th>)}
                </tr>
            </thead>
            <tbody>
                    {abbreviations.map(abbreviation => <TableRow team={abbreviation} teams={abbreviations}/>)}
            </tbody>
        </table>
    )
}