import { Link } from "react-router-dom";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
      <div className="container">
        {/* Logo Section */}
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="https://dont-copy.netlify.app/assets/logo-S2lIhR8K.svg"
              alt="Logo"
              className="img-fluid"
              style={{ width: "160px", height: "auto" }}
            />
          </Link>
        </div>

       
        <div className="d-flex flex-grow-1 justify-content-center mx-3">
          <form
            className="d-flex align-items-center w-75"
            style={{ maxWidth: "500px" }}
          >
            <input
              className="form-control me-2 rounded-pill shadow-sm"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
            
          </form>
        </div>

        <div className="d-flex align-items-right">
         Create Account <Link to="/register">
            
               <span className="fw-bold">It’s Free!</span>
            
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
