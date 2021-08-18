import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'; 

const Add = () => {
    const candidateData = useRef("null");
    const [candidates, setcandidates] = useState(null);
    const [dataUpdated, setdataUpdated] = useState(0);

    function addMember() {
        const form = candidateData.current
        const data = {
            "name" : form['candidateName'].value
        }
        axios.post('http://127.0.0.1:5000/add', data)
            .then(response => {
                setdataUpdated(dataUpdated+1)
            });
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/voteSummary')
            .then(response => {
                const validify = response.data;
                setcandidates(validify)
    });
    }, [dataUpdated]);

    return (
        <div className="con">
            <h1>Add Candidate</h1>
            <div className="con_form">
                <form method="post" ref={candidateData}>
                    <input type="text" name="candidateName" id="candidateName"/><br></br>
                    <input type="submit" onClick={addMember} name= "Submit" value = "Enter Candidate"/>
                </form>
            </div>
            <div>
                {candidates && candidates.map((candidate) => (
                    <div>
                        <h2>{candidate.name}</h2>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Add;
