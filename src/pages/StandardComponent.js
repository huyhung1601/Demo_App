import React, {useState, useEffect} from 'react'
import {ChildComponent} from './StandardChildComponent'
// mock data
// 6.
const mockScore = 11111;

/**
 * Standard Component
 */
const StandardComponent = (props) => {
    // 1.
    const [score, setScore] = useState(0);
    // 2. 
    const [newScore, setNewScore] = useState(0);

    // 5.
    // call once on page load
    useEffect(()=>{
        // call api to get score
        setScore(mockScore)
    }, []);

    // 3.
    const handleGetScore = (e) => {
        e.preventDefault();
        // call api
        const mockResult = 10;
        setScore(mockResult)
    }
    // 4.
    const handleSubmit = (e) => {
        e.preventDefault();
        // call api
        console.log(newScore);
        // clear form
        setNewScore(0);
    }
    return (
        // 0.
        <>
            <ChildComponent score={score} onSubmit={handleGetScore}/>
            <br/>
            <br/>
            <input type="number" value={newScore}></input>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit new Score to Server</button>
        </>
    );
}

export default StandardComponent;