import Image from 'next/image'
import styles from './timelabel.module.css'

function TimeLabel(props) {
    const now = props.date;
    const time = now.getHours();
    const timeicon = (time >= 6 && time < 18) ? 'sun' : 'moon';
    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false
      });

    const amPmValue = now.getHours() >= 12 ? "PM" : "AM";


    return (
        <div className={styles.timeLabel}>
            <div className={styles.timeicon}>
                <Image src={`${'/'+timeicon+'.svg'}`} width={22} height={22}/>
            </div>
            <div className={styles.formattedTime}>
                <span>{formattedTime}</span>
            </div>
            <div className={styles.amPmValue}>
                <span>{amPmValue}</span>
            </div>
        </div>
    );
}

export default TimeLabel;