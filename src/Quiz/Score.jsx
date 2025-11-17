export default function Score({score, total, handleReset}){
    return(
        <div>
            <h3>Quiz Completed</h3>
            <h3>Your Final Score: {score}/{total}</h3>
            <button onClick={()=> handleReset()}>Reset</button>
        </div>
    )
}