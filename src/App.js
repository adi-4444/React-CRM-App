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
          <Route path='/admin' element={<Admin />} />
        </Route>
        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
