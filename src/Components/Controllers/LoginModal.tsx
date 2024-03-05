import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import InputController from "./Input.Controller";
import { Login, Person } from "@/Interfaces/userInterface";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "@/Redux/features/SignUp/Login.Slice";
import { RootState } from "@/Redux/Store/Store";
import { toast } from "react-toastify";

const LoginModal = () => {
    const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    defaultValues: {
      userId: "",
      password: "",
    },
  });
  const onSubmit = (data: Login) => {
     dispatch(LoginUser(data) as any);
  }
  const response = useSelector((state: RootState) => state.userLogin.user);
  useEffect(() => {
    if (response && response.status ) {
       localStorage.setItem("User", JSON.stringify(response.userData
        ));
      handleClose();
    } 
  }, [response]); 
  return (
    <div>
      <button className="btn text-primary" onClick={handleShow}>
        Login
      </button>

      <Modal show={showModal} onHide={handleClose} size="xl">
        <Modal.Header className="d-flex justify-content-between">
          <Modal.Title>Login</Modal.Title>
          <button className="btn" onClick={handleClose}>
            <IoMdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputController
              type="text"
              control={control}
              name="userId"
              label="Enter User Id"
              placeholder="Enter your User Name or Email or Password"
              required={true}
              className="w-100 form-control rounded focus-ring p-1 mb-3"
            />
            <InputController
              type="password"
              control={control}
              name="password"
              label="Password"
              placeholder="Password"
              required={true}
              className="w-100 form-control rounded focus-ring p-1 mb-3"
            />
            <Modal.Footer>
              <button className="btn border-primary text-primary" type="submit">
                Login
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginModal;
