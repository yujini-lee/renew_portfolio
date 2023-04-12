import React from 'react';
import {info} from '../../info/Info'
import yujin from '../../img/yujin.png'
import styles from '../Home/Home.module.css'
import SocialsIcon from './SocialsIcon';

export default function Home() {
    return (
        <>
        <div className={styles.mainWarp}>
        <main>
        <img src={yujin} alt="yujin mimoji" className={styles.img}/>
            <div>
                <h1 className={styles.h1}>
                Hi, I'm Yujin <span className={styles.hand}>👋🏻</span> 
                </h1>
                <h2 className={styles.h2}>저는 <span className={styles.name}>웹퍼블리셔</span> 입니다.
                 </h2>
                <ul className={styles.bioWrap}>
                    {
                        info.miniBio.map((bio, index) => 
                        <li key={index} className={styles.bio}>
                            <span>{bio.emoji}</span>
                            {bio.text}
                        </li>)
                    }
                </ul>
                <div className={styles.iconWrap}>
               {
                info.socials.map((socials, index) =>
                    <SocialsIcon key={index} link={socials.link} label={socials.label} icon={socials.icon}/> 
                    )
               }
               </div>
            </div>
           
        </main>
        </div>
        </>
       
    );
} 