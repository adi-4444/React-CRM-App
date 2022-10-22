import { Navigate, Outlet } from "react-router-dom";

const VerifyAuth = props => {
    const { allowedRoles } = props;
    const currentUserType = localStorage.getItem("userTypes");


    if (allowedRoles.includes(currentUserType)) {
        return <Outlet />;
    }

    if (!currentUserType) {
        return <Navigate to='/' />;
    }

    return <Navigate to='/unauthorized' />;
};

export default VerifyAuth;