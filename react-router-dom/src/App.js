   import './App.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Tasks from './components/Tasks';
import Leaves from './components/Leaves';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LogIn></LogIn>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
      <Route path="/tasks" element={<Tasks></Tasks>}></Route>
      <Route path="/leaves" element={<Leaves></Leaves>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
