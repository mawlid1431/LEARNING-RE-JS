import "./App.css";
import Tweet from "./componants/Tweet";
import Test from "./componants/Test";
import We from "./componants/We"
import Job from "./componants/Job"
import Cond from "./componants/Cond";
import People from './componants/People'
import User from "./componants/User";
import { useState } from "react";


function App() {

  const [value, setValue] = useState('')


  // let names = ['jama', 'khaalid', 'mustafe']

  const people = [
    { name: "ali", isOnline: true },
    { name: "muse", isOnline: true },
    { name: "zack", isOffline: false },
    { name: "ali", isOffline: true }];


  return (
    <div>

      {people.map((item) => (

        <People item={item} />
      ))}








      <h2>The user has Entered  {value}</h2>










      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <p>This is my app component </p>
      <Tweet name="tweet page1" />
      <Tweet name="tweet page2" />
      <Tweet name="tweet page 3" />
      <p>This is my app component2 </p>
      <Test age="TEST1" />
      <Test age="TEST2" />
      <Test age="TEST2" />

      <Job name="asad" />
      <Cond age="you are under" />





      <We email="WE1@gmail.com" number="1299234" location="hero 12 awr" />
      <We email="WE@gmail.com" number="12234" location="hero 22awr" />
      <We email="WE2@gmail.com" number="1223554" location="hero 44awr" />
      <We email="WE3@gmail.com" number="122311334" location="herott awr" />
      <We email="WE4@gmail.com" number="12234" location="hero ttttawr" />



      <User IsLogin="false" />
      <User IsLogin="false" />
      <User IsLogin="true" />
      <User IsLogin="true" />
      <User IsLogin="true" />
      <User IsLogin="true" />


      <User IsLogin="false" />
      <User IsLogin="false" />
      <User IsLogin="true" />
      <User IsLogin="true" />
      <User IsLogin="true" />
      <User IsLogin="true" />





    </div>

  );
}

export default App;
