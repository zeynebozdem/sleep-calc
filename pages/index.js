"use client";
import Image from 'next/image'
import Splash from '../components/splash/splash'
import TimeContainer from '../components/timecontainer/timecontainer';

export default function Index() {
  return (
      <div>
        <Splash/>
        <TimeContainer/>
      </div>
  )
}
