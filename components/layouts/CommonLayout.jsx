import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Outlet } from 'react-router';

function CommonLayout() {
    return (
        <div>
           <Header />
           <Outlet />
           <Footer /> 
        </div>
    );
}

export default CommonLayout;
