import React, { useState, useEffect } from 'react';
import TimeContent from "../timecontent/timecontent";
import TimeLabel from "../timelabel/timelabel";
import styles from './timecontentcontainer.module.css'


function TimeContentContainer(props) {
    return (
        <div className={styles.timecontentcontainer}>
            <TimeContent createNewTime={props.createNewTime}/>
            {
                props.timeItems && props.timeItems.map((item) => {
                    return <TimeLabel date={new Date(item)} />
                })
            }

        </div>
    );
}

export default TimeContentContainer;