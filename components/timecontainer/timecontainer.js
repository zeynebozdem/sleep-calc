import React, { useState, useEffect } from 'react';
import NavigationContainer from "../navigationcontainer/navigationcontainer";
import TimeContentContainer from '../timecontentcontainer/timecontentcontainer';
import styles from './timecontainer.module.css'

function TimeContainer() {
    const [visibilityStatus, setVisibilityStatus] = useState('display-none');
    const [timeItems, setTimeItems] = useState();
    const [sleepCycles, setSleepCycles] = useState(6);
    const [selectedTime, setSelectedTime] = useState();
    const [fallASleepTime, setfallASleepTime] = useState(15);   //  IDEA: should be customizable 

    const calculateTimeItems = (time, subtract = false) => {
        const cycleTime = 90;
        const timeItems = [];
    
        for (let i = 0; i < sleepCycles; i++) {
            if (i == 0) {
                timeItems.push(time.setTime(time.getTime() + (time.getMilliseconds() + ((cycleTime * (i + 1)) + fallASleepTime) * 60 * 1000)));
            } else {
                timeItems.push(time.setTime(time.getTime() + (time.getMilliseconds() + cycleTime * 60 * 1000)))
            }
        }
        setTimeItems(timeItems);
        return timeItems;
    }


    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setVisibilityStatus('show');
        }, 1000);


        return () => {
            clearTimeout(timeOutId);
        }

    });

    return (
        <div className={styles.timecontainer + ' ' + visibilityStatus}>
            <TimeContentContainer timeItems={timeItems} />
            <NavigationContainer calculateTimeItems={calculateTimeItems}/>
        </div>
    );
}

export default TimeContainer;