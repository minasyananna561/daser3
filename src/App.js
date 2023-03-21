import { About } from './component/About';
import { Home } from './component/Home';
import { Covid } from './component/Covid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './component/Header';
import './App.css';
import { Title } from './component/Title';
import { Search } from './component/Search';
import { Page6 } from './component/Page6';
import { Page7 } from './component/Page7';
import { Page8 } from './component/Page8';
import { Page9 } from './component/Page9';
import { Page10 } from './component/Page10';
import { Page11 } from './component/Page11';
import { Page12 } from './component/Page12';
import { Page13 } from './component/Page13';
import { Page14 } from './component/Page14';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route exact path="/about" element={<About/>}/>
      
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>

        <Route exact path="/covid" element={<Covid/>}/>
        <Route exact path="/title" element={<Title/>}/>
        {/* <Route exact path="/Search" element={<Search/>}/> */}
        <Route exact path="/page6" element={<Page6/>}/>
        <Route exact path="/page7" element={<Page7/>}/>
        <Route exact path="/page8" element={<Page8/>}/>
        <Route exact path="/page9" element={<Page9/>}/>
        <Route exact path="/page10" element={<Page10/>}/>
        <Route exact path="/page11" element={<Page11/>}/>
        <Route exact path="/page12" element={<Page12/>}/>
        <Route exact path="/page13" element={<Page13/>}/>
        <Route exact path="/page14" element={<Page14/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
  
}

export default App;
