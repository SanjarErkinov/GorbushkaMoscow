import styles from './Fifth.module.css'
import FifthCard from './fifth-card/FifthCard';

const Fifth = () => {
    return (
        <div className={styles.fifth}>
            <div className={styles.fifth__container}>
                <div className={styles.fifth.body}>
                    <div>
                        <div className={styles.fifth__title}>
                            <h1>Просмотренные товары</h1>
                        </div>
                        <div className={styles.fifth__card}>
                            <FifthCard />
                            <FifthCard />
                            <FifthCard />
                            <FifthCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fifth;