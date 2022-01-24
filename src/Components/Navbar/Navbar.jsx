import React from 'react';
import styles from './Navbar.module.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import NavMiddle from './NavMiddle';
import NavRight from './NavRight';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            {/* navbar's left part */}
            <div className={styles.navLeft}>
                <div>
                    <FacebookRoundedIcon style={{ fontSize: '46px' }} color='primary' />
                </div>
            </div>
            {/* navbar's middle part */}
            <div className={styles.navMiddle}>
                <NavMiddle />
            </div>
            {/* navbar's right part */}
            <div className={styles.navRight}>
                <NavRight />
            </div>
        </div>
    );
};

export default Navbar;
