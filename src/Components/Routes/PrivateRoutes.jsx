import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress w-56">Loading..</progress>
    }
    if(user){
        return children
    }

    return <Navigate to="/" replace={true}></Navigate>
};

export default PrivateRoutes;