import React, { FC } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: FC = (props) => {
    return (
        <div>
            <Header />
            <div className="container mt-3 mb-3">{props.children}</div>
            <Footer />
        </div>
    )
}

export default Layout;
