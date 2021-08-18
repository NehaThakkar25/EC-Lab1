import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Result = () => {
    const [candidates, setcandidates] = useState(0);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/voteSummary")
        .then(response => {
            setcandidates(response.data)
        })
        
    }, []);

    return (
        <div className="con">
            <h1>Vote Summary</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Votes</th>
                </tr>
            {candidates && candidates.map((candidate)=>(
                <tr>
                    <td>{candidate.name}</td>
                    <td>{candidate.votes}</td>
                </tr>
            ))}
            </table>
        </div>
    );
}


export default Result;
