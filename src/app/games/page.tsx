import { Metadata } from "next"

export const metadata : Metadata = {
    title : {
        absolute : "Game"
    }
}
export default function GameList()
{
    return(
        <>
        <h1>Game List</h1>
        <h2>Game 1</h2>
        <h2>Game 2</h2>
        <h2>Game 3</h2>
        </>
    )
}