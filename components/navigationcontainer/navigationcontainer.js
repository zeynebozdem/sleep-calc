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

    const [formattedTime, setformattedTime] = useState(new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }));

    message = <span>Uyuma saati seç</span>

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

    const TimePickerAcceptClose = (value) => {
        console.info(value)
    
    }
    const TimePickerChange = (newValue) => {
        setValue(newValue);
        setformattedTime(newValue.format('HH:mm'));
        setTimeItems(props.calculateTimeItems(newValue.toDate(),false,newValue.format('HH:mm')));
        HandleTimePickerClose();
    }    

    const changeTime = () => {
        setMode('timePicker');
        setOpen(!open);
    }


    return (
        <div>
            <div className={`${styles.button}`} onClick={changeTime}>
                <div>
                    {message}
                </div>
                {
                    <div className={styles.time}>
                        <span>{formattedTime}</span>
                    </div>
                }
                <div className={visibilityStatus}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['MobileTimePicker']}>
                            <MobileTimePicker
                                ampm={false}
                                closeOnSelect={false}
                                value={value}
                                open={open}
                                onChange={TimePickerChange}
                                onClose={TimePickerAcceptClose}
                                onAccept={TimePickerAcceptClose(value)}/>
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div>
        </div>
    );
}

export default NavigationContainer;