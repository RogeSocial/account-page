import './App.css'
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='page'>
      
      <Outlet />
      
    </div>
  );
}

export default App