import styles from './navigationcontainer.module.css';
import React, { useState, useEffect, useRef } from 'react';


function NavigationContainer(props) {
    let message;
    //const createNewTime = props.createNewTime;
    const createNewTime = true;
    const [formattedTime, setformattedTime] = useState(new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }));

    message = <span>Uyanma saati seç</span>

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