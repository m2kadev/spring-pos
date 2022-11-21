import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import POS from './pages/POS';
import Register from './pages/Register';
import PrivateRoute from './PrivateRoute';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          
          <Route path='*' element={
          <ProtectedRoutes>
            <PrivateRoute />
          </ProtectedRoutes>
          }/>

          <Route path='/pos' element={
            <ProtectedRoutes>
              <POS />
            </ProtectedRoutes>
          } />
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
