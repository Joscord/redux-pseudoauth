import './App.css';
import Auth from './comṕonents/Auth/Auth';
import UserProfile from './comṕonents/UserProfile/UserProfile';
import { useSelector } from 'react-redux'
import Header from './comṕonents/Header/Header';

function App() {
  // Obtenemos la pieza de estado
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  return (
    <div className="App">
      <Header/>
      {isAuthenticated ? <UserProfile/> : <Auth/>}
    </div>
  );
}

export default App;
