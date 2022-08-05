import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getCustomerLoginStatus } from './getCustomerLoginDetails';

export const PrivateRoutes = () => {
    let userid = getCustomerLoginStatus() === true ? true : false;
    return (
        <>
            {userid ? <Outlet /> : <Navigate to="/" />};
        </>
    )
}

export const BeforeLoginRoutes = () => {
    let userid = getCustomerLoginStatus() === false ? true : false;
    return (
        <>
            {userid ? <Outlet /> : <Navigate to="/" />};
        </>
    )
}