import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./UI/Home";
import Error from "./UI/Error";
import AppLayout from "./UI/AppLayout";
import Avatars from "./components/Avatar/Avatars";
import Badge from "./components/Badge/Badge";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Headings1 from "./components/Headings/Headings1";
import Image from "./components/Image/Image";
import Text from "./components/Text/Text";
import Alerts from "./components/Alert/Alerts";
const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Avatar",
        element: <Avatars></Avatars>,
      },
      {
        path: "/Alerts",
        element: <Alerts></Alerts>,
      },
      {
        path: "/Badge",
        element: <Badge></Badge>,
      },
      {
        path: "/Button",
        element: <Button></Button>,
      },
      {
        path: "/Card",
        element: <Card></Card>,
      },
      {
        path: "/Heading",
        element: <Headings1></Headings1>,
      },
      {
        path: "/Image",
        element: <Image></Image>,
      },
      {
        path: "/Text",
        element: <Text></Text>,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
