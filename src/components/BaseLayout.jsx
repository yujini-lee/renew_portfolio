import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './BaseLayout.module.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


export default function BaseLayout() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
       localStorage.setItem('darkMode', !darkMode);
        setDarkMode((mode) => !mode);
    }    
    useEffect(() => {
        let DarkMode = eval(localStorage.getItem('darkMode'));
        if (DarkMode) {
           setDarkMode(DarkMode);
        } else {
           localStorage.setItem('darkMode', darkMode);
        }
     }, []);
    return (
        <> 
        <div className={darkMode ? 'dark' : 'light'}>
            <div className='container'>
                <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
                <Outlet/>
                <Footer/>
            </div>
        </div>  
        </>
       
    ); 
   
}

