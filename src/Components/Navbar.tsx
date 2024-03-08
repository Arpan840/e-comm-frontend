import React from "react";
import InputController from "./Controllers/Input.Controller";
import LoginModal from "./Controllers/LoginModal";
import SignUpModal from "./Signup.Modal";
import { useForm } from "react-hook-form";
import { search } from "@/Interfaces/interface";
import { useDispatch,useSelector } from "react-redux";
import { LogOutUser } from "@/Redux/features/SignUp/Logout.Slice";

const TopNavbar = () => {
  const dispatch = useDispatch()
  function logout(){
    dispatch(LogOutUser() as any)
  }
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<search>({
        defaultValues: {
          searchProducts:""
        },
      });
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex justify-content-between">
        <div>
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
             <LoginModal/>
            </li>
            <li className="nav-item">
              <SignUpModal/>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={logout}>Logout</button>             
            </li>
          </ul>
          <form className="d-flex">
            <InputController
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              control={control}
              name="search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavbar;
