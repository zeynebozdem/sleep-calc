"use client";
import Image from 'next/image';
import styles from './splash.module.css'
import React, {useState, useEffect, useRef } from 'react';


function Splash() {
    const [visibilityStatus, setVisibilityStatus] = useState('');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisibilityStatus('display-none');
        }, 1000);

        return () =>{
            clearTimeout(timeoutId);
        }
    },[]);
    return (
        <div className={`${styles.logoContainer +' '+ visibilityStatus}`}>
            <div className={styles.img}>
                <Image src="/sleepyeyes.svg" width={97} height={16}/>
            </div>
            <div className={styles.logo}>
                <span>sleep calc.</span>
            </div>
            <div className={styles.description}>
                <span>not much sleep, efficient sleep.</span>
            </div>
        </div>
    );
}
export default Splash;