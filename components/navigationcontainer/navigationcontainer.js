import styles from './navigationcontainer.module.css';
import React, {useState, useEffect, useRef } from 'react';
import { TextField } from '@material-ui/core';

function NavigationContainer(props) {
    let message;
    //const createNewTime = props.createNewTime;
    const createNewTime = true;
    const [formattedTime, setformattedTime] = useState(new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }));

    if (createNewTime) {
        message = <span>Uyanma saati seç</span>
    } else {
        message = <span>Seç</span>
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
          setformattedTime(new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
        }));
        }, 1000);
    
        return () => clearInterval(intervalID);
      }, []);

    return (
        <div>
            <div className={`createNewTime ? ${styles.button + ' ' + styles.createNewTime}`}>
                <div>
                    {message}
                </div>
                {
                    createNewTime && <div className={styles.time}>
                        <span>{formattedTime}</span>
                    </div>
                }
            </div>
        </div>
    );
}

export default NavigationContainer;