import React, { Fragment, FC } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: FC<{ children: React.ReactElement }> = ({ children }) => {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
};

export default Layout;
