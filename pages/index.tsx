import React from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/index';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function Home() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Layout>
                <div className={styles.container}>
                    <Head>
                        <title>Never Not Writing</title>
                        <meta
                            name="description"
                            content="A notes app alternative because the elephant one is acting weird"
                        />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                </div>
            </Layout>
        </ThemeProvider>
    );
}
