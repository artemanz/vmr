import React from 'react';
import Header from '../../components/Header/Header';
import Block1 from '../../components/Block1/Block1';
import styles from './MainPage.module.scss'
import Block5 from '../../components/Block5/Block5';
const MainPage = () => {
    return (
        <div className={styles.MainPage}>
            <Header />
            <Block1 />
            <Block5 />
        </div>
    );
};

export default MainPage;