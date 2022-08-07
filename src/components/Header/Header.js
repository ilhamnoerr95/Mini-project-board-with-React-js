import { useEffect } from "react";
import "./_header.scss";
// eslint-disable-next-line no-unused-vars
import Modal from "./Modal/Modal";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const localToken = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {}, []);
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid  d-flex justify-content-start">
          <span className="navbar-brand mb-0 h1">Product Roadmap</span>

          <Modal />
        </div>
      </nav>
    </>
  );
};

export default Header;
