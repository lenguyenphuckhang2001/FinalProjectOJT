import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routers/index';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return <RouterProvider router={routers} />;
 
}

export default App;
