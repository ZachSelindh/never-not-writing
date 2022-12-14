import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Never Not Writing</title>
                <meta name="description" content="A notes app alternative because the elephant one is acting weird" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}
