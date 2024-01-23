import styles from './navigationcontainer.module.css';
import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers';

function NavigationContainer(props) {
    let message;
    const [value, setValue] = useState(dayjs(new Date()));
    const [open, setOpen] = useState(false);
    const [timeItems, setTimeItems] = useState();
    const [mode, setMode] = useState('interval');
    const [visibilityStatus, setVisibilityStatus] = useState('display-none');

    const createNewTime = true;
    const [formattedTime, setformattedTime] = useState(new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }));

    message = <span>Uyanma saati seç</span>

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
        console.info(open);
    }, [mode,open]);

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
        setMode('timePicker');
        setOpen(true);
    }


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
                        <DemoContainer components={['MobileTimePicker']}>
                            <MobileTimePicker
                                value={value}
                                open={open}
                                onChange={TimePickerChange}
                                onClose={HandleTimePickerClose}
                                onAccept={TimePickerChange}
                                mobilePaper/>
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div>
        </div>
    );
}

export default NavigationContainer;