"use client";
import styles from '../styles/globals.css'
import Image from 'next/image'
import Splash from '../components/splash/splash'
import TimeContainer from '../components/timecontainer/timecontainer';

export default function Page() {
  return (
      <div className='mainContainer'>
        <Splash/>
        <TimeContainer/>
      </div>
  )
}
