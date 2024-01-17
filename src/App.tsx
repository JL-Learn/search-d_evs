import { Outlet } from 'react-router-dom';
import classes from './App.module.css';

function App() {

  return (
    <>
      <div className={classes.app}>
        <h1 style={{color: '#6328d0'}}>Search <span style={{color: '#8b00a0'}}>d_evs</span></h1>
        <Outlet />
      </div>
    </>
  )
};

export default App;