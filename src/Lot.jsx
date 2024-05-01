import { useState } from "react"
import { genTic,sum } from "./helper";
import Ticket from "./Ticket";



export default function Lottery({n ,winningSum}){
    let [ticket , SetTicket] = useState(genTic(n));
    let isWinning = sum(ticket) === winningSum;
    let buyTic =()=>{
        SetTicket(genTic(n))
    }

    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <button onClick={buyTic}>Buy ticket</button>
            <h3>  
                
                {isWinning && "congrats, you won!"}
            </h3>
        </div>
    )
}