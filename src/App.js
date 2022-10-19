import { Header } from "./components/front/Header";
import './App.css'
import fire from './sounds/fire.mp3'
import Campfire from "./components/front/Campfire";

function App() {
  return (
    <div className="main">
        <div id="" className="loader-container">
          <img className="aroma" src="aroma.png" alt="smoke"></img>
          <div className="cup">
          <div className="handle">
          </div>
        </div>
      </div>
      <div className="top-container">
        <Header/>
        <Campfire sound={fire} />
      </div>
    </div>
  );
}

export default App;
