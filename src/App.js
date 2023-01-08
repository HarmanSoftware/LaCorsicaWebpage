import {React} from 'react'
import '../src/Assets/App.css';
import '../src/Assets/DarkMode.css';
import '../src/Assets/Global.css';
import { createContext, useState,useEffect} from 'react'
import {Routes, Route} from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";


import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';

import NavBar from './Components/NavBar'
import BackTop from './Components/BackTop';
import Footer from './Components/Footer';
import SuperHeader from './Components/SuperHeader';
import Cursor from './Components/Cursor';


export const ThemeContext = createContext(null);

function App() {  
  let [theme, setTheme] = useState("light");
  function toggleTheme() {    
    if(theme==='light'){
      setTheme('dark');
      localStorage.setItem('modes','dark');
    }else{
      setTheme(theme==='dark');
      setTheme('light');
      localStorage.setItem('modes','light');
    }
  }; 
  useEffect(()=>{    
    const theme=localStorage.getItem('modes');
    setTheme(theme);
  },[]);  

  //Screen preloader
  const override = {
    display: "flex",
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    width:'%100',
    height:'100vh',
    margin: "0 auto",    
  };
  const [loading,setLoading] = useState(false);

  useEffect (() => {
    setLoading(true)
    setTimeout(()=>{
    setLoading(false)
    },5000)
  },[])

 

  return (
    <>
    {loading? <BeatLoader
        color='#4193a9'
        loading={loading}
        cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :      
    <ThemeContext.Provider value={{ theme, toggleTheme }}>    
    <div className="App" id={theme}>
      <Cursor></Cursor>
      <SuperHeader></SuperHeader>           
      <NavBar themeprops={theme} toglleprops={toggleTheme}/>  
      <BackTop themeprops={theme}/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />        
        <Route path="contact" element={<Contact />} />        
        <Route path="*" element={<PageNotFound />} />
     </Routes>   
      <Footer/>
    </div>
     </ThemeContext.Provider>      
  }
    </>
  );
}
export default App;