import axios from 'axios';
import React,{useEffect, useState} from 'react';

const Winner = () => {
    const [winner, setwinner] = useState(0);
    const [winnerError, setwinnerError] = useState(0);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/winner")
        .then((response) => {
            if(response.data.response === 201 || response.data.response === 202)    
                setwinnerError(response.data.message)
            else
                setwinner(response.data)
        })
        
    }, []);

    return (
        <div className="con">
            <h1>Winner</h1>
            {winner ? "Winner is "+winner[0]['name']+" with total of "+winner[0]['votes']+" votes" : "No winner data available " + winnerError}
        </div>
    );
}


export default Winner;
