import {Navigate, Outlet} from "react-router";

const PrivateRoutes = () => {

  const auth = {"token": true};
    return (
      auth.token ? <Outlet/> : <Navigate to="/login"/>
    );
}

export default PrivateRoutes;
