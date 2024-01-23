import styles from './timecontent.module.css';

function TimeContent(props) {
    let message;

    if (props.createNewTime) {
        message = <span>Eğer uyanma saatin {props.createNewTime} olursa</span>;
    } else {
        message = <span>Eğer şimdi uyursan:</span>;
    }
    return (
        <div className={styles.timecontent}>
            <div className={styles.title}>
                <span>Saat kaçta uyanmalıyım?</span>
            </div>
            <div className={styles.description}>{message}</div>
        </div>
    );
}

export default TimeContent;