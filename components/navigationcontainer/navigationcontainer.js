import styles from './navigationcontainer.module.css';
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

function NavigationContainer(props) {
    const classes = useStyles();
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
                <form className={classes.container} noValidate>
                    <TextField
                        id="time"
                        type="time"
                        defaultValue={new Date().toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: false
                        })}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 60, // 5 min
                        }}
                    />
                </form>
            </div>
        </div>
    );
}

export default NavigationContainer;