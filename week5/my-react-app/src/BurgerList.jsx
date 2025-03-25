function BurgerList({count, name}) {
    return (
      <>
        <ul>
          {Array.from({length: count}, (v, i) => (<li key={i}>{name} is a great burger!</li>))}
        </ul>
      </>
    );
  }
  
export default BurgerList