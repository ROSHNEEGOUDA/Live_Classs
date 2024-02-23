import {Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import LivePage from './room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/classroom/:roomId' element={<LivePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
