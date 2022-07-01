import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './welcome';
import HeadBar from './sidebar';
import AboutProfile from './profile';
import Experience from './experience';
import Skilss from './skilss';
import Interest from './interest';
import Awards from './awards';

function App() {
  return (
    <Router>
      <div className="App">
        <HeadBar />
        <Routes>
          <Route path="/" exact element={<Welcome/>}/>
          <Route path="/aboutProfile" element={<AboutProfile/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/skills" element={<Skilss/>}/>
          <Route path="/interest" element={<Interest/>}/>
          <Route path="/awards" element={<Awards/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;