import styles from './navigationcontainer.module.css';
import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function NavigationContainer(props) {
    let message;
    const [value, setValue] = useState(dayjs(new Date()));
    const [open, setOpen] = useState(false);
    const [timeItems, setTimeItems] = useState();
    const [mode, setMode] = useState('interval');

    console.info(open);
    const [visibilityStatus, setVisibilityStatus] = useState('display-none');


    //const createNewTime = props.createNewTime;
    const createNewTime = true;
    const [formattedTime, setformattedTime] = useState(new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }));

    message = <span>Uyanma saati seç</span>
    const HandleTimePickerClose = () => {
        setOpen(false);
    }

    const TimePickerChange = (newValue) => {
        setValue(newValue);
        setformattedTime(newValue.format('HH:mm'));
        setTimeItems(props.calculateTimeItems(newValue.toDate()));
        HandleTimePickerClose();
    }



    const changeTime = () => {
        setOpen(true);
        setMode('timePicker');
    }

    useEffect(() => {
        if (mode == 'interval') {
            const intervalID = setInterval(() => {

                setTimeItems(props.calculateTimeItems(new Date()));
                setformattedTime(new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                }));


            }, 1000);

            return () => clearInterval(intervalID);
        }
    }, [mode]);


    return (
        <div>
            <div className={`createNewTime ? ${styles.button + ' ' + styles.createNewTime}`} onClick={changeTime}>
                <div>
                    {message}
                </div>
                {
                    createNewTime && <div className={styles.time}>
                        <span>{formattedTime}</span>
                    </div>
                }
                <div className={visibilityStatus}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                            <TimePicker label="Controlled picker"
                                value={value}
                                open={open}
                                onChange={TimePickerChange}
                                onAccept={HandleTimePickerClose}
                                onClose={HandleTimePickerClose} />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div>
        </div>
    );
}

export default NavigationContainer;