import React, { useState, useEffect } from 'react';
import TimeContent from "../timecontent/timecontent";
import TimeLabel from "../timelabel/timelabel";
import styles from './timecontentcontainer.module.css'


function TimeContentContainer(props) {
    const [timeItems, setTimeItems] = useState();
    
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTimeItems(props.calculateTimeItems(new Date()));
        }, 1000);
    
        return () => clearInterval(intervalID);
      }, []);

    return (
        <div className={styles.timecontentcontainer}>
            <TimeContent/>
            {
                timeItems && timeItems.map((item) => {
                    return <TimeLabel date={new Date(item)} />
                })
            }

        </div>
    );
}

export default TimeContentContainer;