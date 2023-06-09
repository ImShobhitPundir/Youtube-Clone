import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainCointainer from "./components/MainCointainer";
import WatchPage from "./components/WatchPage";
import SearchResult from "./components/SearchResult";
import DemoUseMemo from "./components/DemoUseMemo";
import DemoUseRef from "./components/DemoUseRef";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainCointainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "result",
        element: <SearchResult />,
      },
      {
        path: "demo",
        element: (
          <>
            <DemoUseMemo />
            <DemoUseRef />
          </>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
