import "./App.css";
import Tweet from "./Tweet";
import Test from "./Test";
import We from "./We"

function App() {
  return (
    <div>
      <p>This is my app component </p>
      <Tweet name="tweet page1" />
      <Tweet name="tweet page2" />
      <Tweet name="tweet page 3" />
      <p>This is my app component2 </p>
      <Test age="TEST1" />
      <Test age="TEST2" />
      <Test age="TEST2" />




      <We email="WE@gmail.com" />
      <We email="WE@gmail.com" />
      <We email="WE@gmail.com" />
      <We email="WE@gmail.com" />
      <We email="WE@gmail.com" />

    </div>

  );
}

export default App;
