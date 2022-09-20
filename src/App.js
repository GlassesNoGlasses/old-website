import { Header } from "./components/top/Header";
import { Body } from "./components/middle/Body";
import './app.css'


function App() {
  return (
    <div className="main">
      <div className="top-container">
        <Header title="Poopity Scoop" style={{ position: 'relative', zIndex: '2' }}/>
      </div>
      <div className="body-container">
      </div>
    </div>
  );
}

export default App;
