import logo from './logo.svg';
import './App.css';
import Addquotes from './components/Addquotes';
import Searchquotes from './components/Searchquotes';
import Deletequotes from './components/Deletequotes';
import Viewall from './components/Viewall';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Addquotes/> }/>
      <Route path="/search" element={ <Searchquotes/> }/>
      <Route path="/delete" element={ <Deletequotes/> }/>
      <Route path="/view" element={ <Viewall/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
