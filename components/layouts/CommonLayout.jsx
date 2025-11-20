import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Outlet } from 'react-router';

function CommonLayout() {
    return (
        <div className='min-h-screen flex flex-col'>
           <Header />
           <main className='flex-grow'>
                <Outlet />
           </main>
           <Footer /> 
        </div>
    );
}

export default CommonLayout;
