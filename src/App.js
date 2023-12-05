import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Student from './pages/student/Student';
import Teacher from './pages/teacher/Teacher';

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/navbar' element={<Navbar/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/student' element={<Student/>}></Route>
      <Route path='/teacher' element={<Teacher/>}></Route>
    </Routes>  
    </BrowserRouter>
    
    </>
  );
}
export default App;
