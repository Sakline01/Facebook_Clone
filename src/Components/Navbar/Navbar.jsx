import React from 'react';
import styles from './Navbar.module.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import NavMiddle from './NavMiddle';
import NavRight from './NavRight';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.navLeft}>
                <div>
                    <FacebookRoundedIcon style={{ fontSize: '46px' }} color='primary' />
                </div>
            </div>
            <div className={styles.navMiddle}>
                <NavMiddle />
            </div>
            <div className={styles.navRight}>
                <NavRight />
            </div>
        </div>
    );
};

export default Navbar;
