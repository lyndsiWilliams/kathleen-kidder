// React
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
      <Link to="/" style={{ marginRight: '2%' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '2%' }}>About</Link>
      <Link to="/short-stories" style={{ marginRight: '2%' }}>Short Stories</Link>
      <Link to="/gallery">Gallery</Link>
    </div>
  );
};

export default NavBar;