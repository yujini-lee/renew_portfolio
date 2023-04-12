import React from 'react';
// import { SiVelog } from 'react-icons/si';
// import { BsGithub } from "react-icons/bs";
// import { AiOutlineTwitter } from 'react-icons/ai';
import styles from '../Home/SocialsIcon.module.css'
export default function SocialsIcon({link,icon,label}) {
    return (
       <>
       {
        label === 'Velog' &&
        <a target="_blank" aria-label='Velog'
            rel="noopener noreferrer" href={link}>
                <i className='velog'></i>
            </a>
            
       }
       {
       label !== 'Velog' &&
            <a target="_blank" aria-label={label}
            rel="noopener noreferrer" href={link}>
                <i className={label}></i>
            </a>
       }
           
       </>
    );
}

