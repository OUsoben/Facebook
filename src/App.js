import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import FriendPage from './pages/FriendPage';
import VideoPage from './pages/VideoPage';
import MarketPage from './pages/MarketPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
         <Routes>
           <Route path='/' index element ={<Homepage/>}/>
           <Route path='/friends' element ={<FriendPage/>}/>
           <Route path='/videos' element ={<VideoPage/>}/>
           <Route path='/marketplace' element={<MarketPage/>}/>
           <Route path='/gamming' element={<GamePage/>}/>
          <Route path='*' element ={<NotFoundPage/>}/>
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
