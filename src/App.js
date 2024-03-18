import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
function App() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
         <Routes>
           <Route path='/' index element ={<Homepage/>}/>
          <Route path='*' element ={<NotFoundPage/>}/>
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
