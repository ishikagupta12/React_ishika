import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import RemusLupin from './components/RemusLupin';
import Doubts from './components/Doubts';
import UpcomingClasses from'./components/UpcomingClasses';
import Mycourses from './components/Mycourses';
import { positions } from '@mui/system';


function App() {
  return (
    <>
       
    <div style={{ background: "linear-gradient(#fde1fb,#fce8fa, #c9f3f5,#e9fbfb)", height:"1550px"}}>

<Navbar/>
<RemusLupin/>
<Doubts/>
<UpcomingClasses/>
<Mycourses/>
</div>

  
    
    
    </>
  );
}

export default App;
