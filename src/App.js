import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RestView from './pages/RestView';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/restaurant-view/:id' element={<RestView/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
