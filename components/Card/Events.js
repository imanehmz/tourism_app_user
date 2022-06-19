function Events() {
    const events = ['Event 1', 'Visite guidée musée', 'Fete ngar ddounnith'];
  
    return (
      <div>
        <ul>
          {events.map((name) => (
            <li >{name}</li>
          ))}
        
        </ul>
      </div>
    );
  }
  export default Events ;