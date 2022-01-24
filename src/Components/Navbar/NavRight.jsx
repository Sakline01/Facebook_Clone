import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { svgObjNavRight } from './svg'


const NavRight = () => {
    const [isActiveObject, setIsActiveObject] = useState({
        more: false,
        messenger: false,
        notification: false,
        account: false
    });
    const handleClick = (activeOption) => {
        for (const key in isActiveObject) {
            if (key === activeOption) {
                setIsActiveObject({ ...isActiveObject, [key]: true })
                break;
            }
        }
        for (const key in isActiveObject) {
            if (key !== activeOption) {
                setIsActiveObject(prev => {
                    prev[key] = false;
                    return prev;
                })
            }
        }
    }
    console.log(isActiveObject);
    return (
        <>
            <div>
                <img src="https://scontent.fccu2-2.fna.fbcdn.net/v/t1.6435-1/cp0/c0.0.50.50a/p50x50/117605262_773663196507691_3978817065757128722_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=npcQl-GZF0oAX8w7Rp2&_nc_ht=scontent.fccu2-2.fna&oh=00_AT8SZfYDqBJwOI_zrgZPdXBLzE8sz7R8HHqdwj-R9SdQIw&oe=6211EA20" alt="img" />
                <h4>Md</h4>
            </div>
            <div onClick={() => handleClick("more")}>
                <svg className={isActiveObject.more ? styles.navActiveIconColor : ""} viewBox="0 0 44 44" width="1em" height="1em" >
                    <circle cx="7" cy="7" r="6"></circle>
                    <circle cx="22" cy="7" r="6"></circle>
                    <circle cx="37" cy="7" r="6"></circle>
                    <circle cx="7" cy="22" r="6"></circle>
                    <circle cx="22" cy="22" r="6"></circle>
                    <circle cx="37" cy="22" r="6"></circle>
                    <circle cx="7" cy="37" r="6"></circle>
                    <circle cx="22" cy="37" r="6"></circle>
                    <circle cx="37" cy="37" r="6"></circle>
                </svg>
            </div>
            <div onClick={() => handleClick("messenger")}>
                <svg className={isActiveObject.messenger ? styles.navActiveIconColor : ""} viewBox="0 0 28 28" alt="" height="20" width="20"><path d={svgObjNavRight.messenger}></path></svg>
            </div>
            <div onClick={() => handleClick("notification")}>
                <svg className={isActiveObject.notification ? styles.navActiveIconColor : ""} viewBox="0 0 28 28" alt="" height="20" width="20"><path d={svgObjNavRight.notification}></path></svg>
            </div>
            <div onClick={() => handleClick("account")}>
                <svg className={isActiveObject.account ? styles.navActiveIconColor : ""} viewBox="0 0 20 20" width="1em" height="1em" ><path d={svgObjNavRight.account}></path></svg>
            </div>
        </>
    );
};

export default NavRight;
