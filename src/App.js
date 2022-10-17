import './App.css';
import {Routes, Route} from 'react-router-dom';
import Authentication from './pages/authentication';
import Engineer from './pages/engineer'
import Customer from './pages/customer'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authentication />}/>
        <Route path='/engineer' element={<Engineer />}/>
        <Route path='/customer' element={<Customer />}/>
      </Routes>
    </div>
  );
}

export default App;
