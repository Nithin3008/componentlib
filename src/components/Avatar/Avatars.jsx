import "./Avatar.css";
const Avatars = () => {
  return (
    <div>
      <p>
        An avatar is a computer representation of users in a computer-generated
        3D world, used primarily in chat and entertainment web sites.
      </p>
      <hr></hr>
      <div className="avatars">
        <img src="/avatar.jpg" className="small"></img>
        <img src="/avatar.jpg" className="medium"></img>
        <img src="/avatar.jpg" className="medium-square"></img>
        <img src="/avatar.jpg" className="large"></img>
      </div>
      <div className="code">
        <img src="avatars.png"></img>
      </div>
    </div>
  );
};

export default Avatars;
