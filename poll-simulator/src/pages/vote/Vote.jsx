import React, {useRef, useState, useEffect } from 'react';
import axios from 'axios'; 

const Vote = () => {

    const voterId = useRef("null");
    const [status, setstatus] = useState(null);
    const [value, setvalue] = useState(0);
    const [candidates, setcandidates] = useState(false);

    function addVote() {
        const data = voterId.current
        var voter = (data['voterId'].value)
        var candidate = document.getElementsByName("radio");
        var selectedCandidate = 0
        for(let i = 0; i < candidate.length; i++) {
            if(candidate[i].checked){
                selectedCandidate = (candidate[i].value)
            }
        }

        axios.post('http://127.0.0.1:5000/vote', {"selectedCandidate" : selectedCandidate, "voterId" : voter})
            .then(response => {
                const validify = response.data;

                if(validify.response === 202)
                    setstatus(<p>{validify.message}</p>)
                else if(validify.response === 203)
                    setstatus(<p>{validify.message}</p>)
                else if(validify.response === 204)
                    setstatus(<p>{validify.message}</p>)
                else if(validify.response === 200)
                    setstatus(<p>{validify.message}</p>)
            });
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/voteSummary')
            .then(response => {
                setcandidates(response.data)
                setvalue(1)
            });
    }, []);


    return (
        <div className="con">
            <form method="post" ref={voterId} className="con_form">
            <h1>Vote here</h1>
            Voter ID : <input type="text" name="voterId" id="voterId"/> 
                {value ? candidates.map((da) => (
                    <div>
                        <p style={{display: "inline-block"}}>{da.name}</p>
                        <input type="radio" name="radio" id={da.name} value={da.name} />
                    </div>
                )) : <div></div>}
                <input type="submit" value="Vote" onClick={addVote}/>
            </form>
            {status}
        </div>
    );
}


export default Vote;
