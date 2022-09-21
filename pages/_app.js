import { ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from '../components/Layout';
import '../styles/globals.css';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

export default MyApp;
