import './App.css';
import { Routes, Route } from 'react-router-dom';
import Authentication from './pages/authentication';
import Engineer from './pages/engineer'
import Customer from './pages/customer'
import Admin from './pages/admin';
import Unauthorized from './pages/warning/Unauthorized403';
import Notfound from './pages/warning/Notfound404'
import VerifyAuth from './commom/components/verifyAuth/VerifyAuth'
import { USER_TYPES } from './commom/constants/userTypes'
import Dashboard from './pages/admin/components/content/components/dashboard/Dashboard';
import Tickets from './pages/admin/components/content/components/tickets/Tickets';
import Users from './pages/admin/components/content/components/users/Users';

import '@coreui/coreui/dist/css/coreui.min.css'
// import '@coreui/coreui/dist/js/coreui.min.js'
import 'react-circular-progressbar/dist/styles.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authentication />} />

        <Route element={<VerifyAuth allowedRoles={[USER_TYPES.CUSTOMER]} />} >
          <Route path='/customer' element={<Customer />} />
        </Route>

        <Route element={<VerifyAuth allowedRoles={[USER_TYPES.ENGINEER]} />} >
          <Route path='/engineer' element={<Engineer />} />
        </Route>

        <Route element={<VerifyAuth allowedRoles={[USER_TYPES.ADMIN]} />} >

          <Route path='/admin' element={<Admin />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='tickets' element={<Tickets />} />
            <Route path='users' element={<Users />} />
          </Route>

        </Route>
        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
