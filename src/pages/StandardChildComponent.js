import react from 'react'

export const ChildComponent = (props) => {
    const {score, onSubmit} = props;
    const handleGetScore = (e)=>{
        onSubmit();
    }
    return (
        <>
            <h1>{score}</h1>
            <button onClick={handleGetScore}>Get Score From Server</button>
        </>
    );
}