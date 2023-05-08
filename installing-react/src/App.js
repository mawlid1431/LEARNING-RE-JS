import './App.css';
import Home from './Home'
import About from './About'


function App() {
  return (
    <div className="App">
      <Home salary={500} position="developer" company="telesom" />
      <Home salary={200} position="developer" company="somtel" />
      <Home salary={100} position="developer" company="somcable" />
    </div>
  );
}

// function Jobs(props) {
//   return (
//     <div>
//       // Your jobs component code goes here
//     </div>
//   );
// }

export default App;
