import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainCointainer from './components/MainCointainer';
import WatchPage from './components/WatchPage';


const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<MainCointainer/>
    },
    {
      path:'watch',
      element:<WatchPage/>
    }
  ]
}])
function App() {
  return (
    <Provider store={store}>
     <Head/>
     <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
