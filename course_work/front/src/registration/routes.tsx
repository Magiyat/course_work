import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';
import Main from '../page/Main';
import Login from '../page/Login';
import Admin from '../page/Admin';
import Logout from '../page/Logout';

export const useRoutes = () => {

    return (
        <Routes>
            <Route index element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />

            <Route element={<PrivateRoute />}>
                <Route path='/admin' element={<Admin />} />
                <Route path="/logout" element={<Logout />} />
            </Route>

        </Routes>
    )
}

export default useRoutes
