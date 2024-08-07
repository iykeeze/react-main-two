import { players } from "../player";
import React from "react";
import PlayerCard from "./PlayerCard"

const PlayerList = () => {
    return (
        <div style={{display: "flex",
         gap: "1rem", 
         justifyContent: "center", 
         alignItems: "center", 
         flexWrap: "wrap", 
         padding: "2rem"}}>
            {players.map((player) => {
                return <div key={player.player_id}>
                    {/* <PlayerCard {...player} />  using Spread Method */}

                    {/* using the normal Props */}
                    {/* player_name = {player.player_name}
                    player_age = {player.player_age}
                    player_country ={player.player_country}
                    player_club ={player.player_club}
                    player_jersey ={player.player_jersey}
                   player_image={player.player_image}  /> */}
                 </div> 
                })}
        </div>
    )
}

export default PlayerList;