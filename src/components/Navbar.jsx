import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {info} from "../info/Info";
import styles from './Navbar.module.css'
const link = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Project',
        to: '/project',
        active: 'project'
    }
    
] 
export default function Navbar({toggleDarkMode, darkMode}) {

    const Li = styled.li({
        '& a': {
            borderBottom: '5px solid rgba(0,0,0,0)',
          '&.active': {
            borderBottom: '5px solid #000',
            boxSizing: 'border-box',
            borderImageSource : '-webkit-linear-gradient(135deg, rgb(232 190 240), rgb(255 229 0))',
            borderImageSlice : '1',
          },
        },
      });

    return (
       <>
       <nav className={styles.wrap}>
       
       <ul>
       
        {
            link.map((link, index) => 
                <Li key={index}>
                    <NavLink to={link.to}>
                    {!link.type && <p className={styles.linkTxt}>{link.name}</p>}
                    {link.type && <h1>{link.name}</h1>}
                    </NavLink>
                </Li>
            )
        }
        <li key='sdfsdfsdfsd'>
            <div>
                {
                    darkMode ?   <button onClick={toggleDarkMode}>🌕</button> :
                    <button onClick={toggleDarkMode}>🌑</button> 
                  
                }
            </div>
        </li>
       </ul>
       </nav>
       </>
    );
}

