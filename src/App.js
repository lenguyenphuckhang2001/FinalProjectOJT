import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routers/index';

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
