import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Patrick-Wilker.png" alt="Patrick Wilker"/>
            <div>
                <strong>Patrick Wilker</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}