import { Outlet } from "react-router";
import Navigation from "./Navigation";

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Navigation></Navigation>
      <div>
        <h1>style Sections</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AppLayout;
