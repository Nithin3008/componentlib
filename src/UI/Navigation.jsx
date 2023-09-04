import { NavLink } from "react-router-dom";
import "./Nav.css";
const Navigation = () => {
  const setActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "orangered" : "",
    color: isActive ? "white" : "",
    borderRadius: isActive ? "5px" : "",
  });
  return (
    <div className="NavSection">
      <div>
        <h1>MangaMosaic-UI</h1>
      </div>
      <hr></hr>
      <section className="Links">
        <NavLink to="/Avatar" className="linkPaths " style={setActiveStyle}>
          Avatar
        </NavLink>
        <NavLink to="/Badge" className="linkPaths" style={setActiveStyle}>
          Badge
        </NavLink>
        <NavLink to="/Button" className="linkPaths" style={setActiveStyle}>
          Button
        </NavLink>
        <NavLink to="/Card" className="linkPaths" style={setActiveStyle}>
          Card
        </NavLink>
        <NavLink to="/Alerts" className="linkPaths" style={setActiveStyle}>
          Alert
        </NavLink>
        <NavLink to="/Heading" className="linkPaths" style={setActiveStyle}>
          Headings
        </NavLink>
        <NavLink to="/Image" className="linkPaths" style={setActiveStyle}>
          Image
        </NavLink>
        <NavLink to="/Text" className="linkPaths" style={setActiveStyle}>
          Text
        </NavLink>
      </section>
    </div>
  );
};

export default Navigation;
