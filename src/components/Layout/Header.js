import React from 'react';
import styles from './Header.module.css'
import sushiImage from '../../assets/sushi.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Япона Кухня</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={sushiImage} alt='Japaneese foods'/>
            </div>
        </React.Fragment>
    );
};

export default Header;