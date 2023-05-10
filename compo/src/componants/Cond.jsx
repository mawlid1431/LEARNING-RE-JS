function Cond (props) {
    const age = props.age;
    return (
      <div>
        {age < 18 ? <p>You are under age</p> : null}
      </div>
    );
  }
  export default Cond