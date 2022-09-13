import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getData } from "./../redux/app/action";

const Navbar = () => {
  const data = useSelector((state) => state.app.data);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handlePress = (e) => {
    setSearch(e.target.value);

    //  if(e.charCode===13){
    //   axios
    //   .get(`https://json-server1122.herokuapp.com/prods?q=${search}`)
    //   .then((res) => {
    //     dispatch(getData(search));
    //     console.log(res.data)
    //   });

    //  }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg main-nav">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            BaazarAtHome
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon toggleer"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/mens"
                >
                  Mens
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/womens">
                  Womens
                </NavLink>
              </li>
            </ul>
            <form className="d-flex text-left" role="search">
              <ul className="navbar-nav me-auto mb-2 text-center mb-lg-0 left">
                <li className="nav-item">
                  <input
                    type={"text"}
                    onChange={handlePress}
                    placeholder="search here.."
                  />
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="/signup">
                    SignUp
                  </NavLink>
                </li>
                <li className="nav-item text-light">
                  <NavLink className="nav-link text-light" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="/cart">
                    Cart
                  </NavLink>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
