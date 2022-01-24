import React, {useState} from 'react';
import { svgObjNavMiddle } from './svg'
import styles from './Navbar.module.css';

const NavMiddle = () => {
    const [isActiveObject, setIsActiveObject] = useState({
        home: true,
        friends: false,
        market: false,
        groups: false,
        gaming: false
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
      <div className={isActiveObject.home ? styles.active : ""} onClick={() => handleClick("home")}>
                    <svg viewBox="0 0 28 28" className={isActiveObject.home ? styles.navActiveIconColor : styles.navIconColor} height="28" width="28"><path d={isActiveObject.home ? svgObjNavMiddle.active.home : svgObjNavMiddle.notActive.home}></path></svg>
                </div>
                <div className={isActiveObject.friends ? styles.active : ""} onClick={() => handleClick("friends")}>
                    <svg viewBox="0 0 28 28" className={isActiveObject.friends ? styles.navActiveIconColor : styles.navIconColor} height="28" width="28"><path d={isActiveObject.friends ? svgObjNavMiddle.active.friends : svgObjNavMiddle.notActive.friends}></path></svg>
                </div>
                <div className={isActiveObject.market ? styles.active : ""} onClick={() => handleClick("market")}>
                    <svg viewBox="0 0 28 28" className={isActiveObject.market ? styles.navActiveIconColor : styles.navIconColor} height="28" width="28"><path d={isActiveObject.market ? svgObjNavMiddle.active.market : svgObjNavMiddle.notActive.market}></path></svg>
                </div>
                <div className={isActiveObject.groups ? styles.active : ""} onClick={() => handleClick("groups")}>
                    <svg viewBox="0 0 28 28" className={isActiveObject.groups ? styles.navActiveIconColor : styles.navIconColor} height="28" width="28"><path d={isActiveObject.groups ? svgObjNavMiddle.active.groups : svgObjNavMiddle.notActive.groups}></path></svg>
                </div>
                <div className={isActiveObject.gaming ? styles.active : ""} onClick={() => handleClick("gaming")}>
                    <svg viewBox="0 0 28 28" className={isActiveObject.gaming ? styles.navActiveIconColor : styles.navIconColor} height="28" width="28"><path d={isActiveObject.gaming ? svgObjNavMiddle.active.gaming : svgObjNavMiddle.notActive.gaming}></path></svg>
                </div>
      </>
  );
};

export default NavMiddle;
