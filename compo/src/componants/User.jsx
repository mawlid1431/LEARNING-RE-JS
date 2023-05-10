import Login from "./Login";
import Guest from "./Guest";

const User = (props) => {
  const age = 12;
  return <div> {props.isLogin == true ? <isLogin /> : <Guest />} </div>;
};

export default User;
