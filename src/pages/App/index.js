import "./style.css";

import Homepages from "../Homepages/index";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from '../../components/Home/index.js';
import AboutMe from '../../components/AboutMe/index.js';
import Resume from '../../components/Resume/index.js';
import Service from '../../components/Service/index.js';
import Portfolio from '../../components/Portfolio/index.js';
import Pricing from '../../components/Pricing/index.js';
import Clients from '../../components/Clients/index.js';
import Blog from '../../components/Blog/index.js';
import Contact from '../../components/Contact/index.js';
import Header from '../../components/Header/index.js';

export default function App() {
  return (
  <div className="App">
   
  <Router>
   <Header />
    <Routes>
    <Route path = '/' element ={ <Homepages/>} />
    <Route path = '/aboutme' element = {<AboutMe/>}/>
    <Route path ='/resume' element = {<Resume/>}/>
    <Route path = '/services' element = {<Service/>} /> 
     <Route path = '/portfolio' element = {<Portfolio/>} />
     <Route path = '/pricing' element = {<Pricing/>} />
     <Route path = '/clients' element = {<Clients/>} />
     <Route path = '/blog' element = {<Blog/>} />
     <Route path = '/contact' element = {<Contact/>} />
    </Routes>
    </Router>
  </div>
  );
}
