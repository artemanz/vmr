import React from 'react';
import Block1 from '../../components/Block1/Block1';
import Block2 from "../../components/Block2/Block2";
import styles from './MainPage.module.scss'
import Block5 from '../../components/Block5/Block5';
import Block34 from '../../components/Block34/Block34';
import Block7 from '../../components/Block7/Block7';
const MainPage = () => {
    return (
        <div className={styles.MainPage}>
            <Block1 />
            <Block2 />
            <Block34 />
            <Block5 />

            <Block7 />
        </div>
    );

};

export default MainPage;
