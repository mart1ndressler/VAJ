function NumberDisplay({number}) {
    return (
        <>
          <div>
            {number%2 === 0 ? (<p>{number} is even!</p>) : (<p>{number} is odd!</p>)}
          </div>    
        </>
      )
}

export default NumberDisplay