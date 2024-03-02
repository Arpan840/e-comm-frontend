import modalContext from "@/Context/Modal.Context/Modal.context";
import React, { useState, useContext, useMemo, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import InputController from "./Controllers/Input.Controller";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { SignUpUser } from "@/Redux/features/SignUp/signUp.Slice";
import { Person } from "@/Interfaces/userInterface";
import { toast } from "react-toastify";
import { RootState } from "@/Redux/Store/Store";


const SignUpModal = () => {
  const modalCurrentState = useContext(modalContext);
  const { showModal, setShowModal } = modalCurrentState;
  const dispatch = useDispatch()

  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);
  const response = useSelector((state: RootState) => state.userSignUp.user);
  useEffect(() => {
    if (response && response.status === 200) {
      console.log(response);
      toast.success(response.message);
      handleClose();
    } else if (response) {
      console.log(response);
      toast.error(response.message);
      localStorage.setItem('user',JSON.stringify(response.data))
    }
  }, [response]); 
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Person>({
    defaultValues: {
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
      contactNumber: "",
      password: "",
    },
  });
 
  const onSubmit = (data: Person) => {
    if(data.password === data.confirmPassword)
    {
    dispatch(SignUpUser(data) as any);
    }
    else{
      toast.error('Password does not matches')
    }
  };

  return (
    <>
      <button className="btn text-primary" onClick={handleShow}>
        Sign Up
      </button>

      <Modal show={showModal} onHide={handleClose} size="xl">
        <Modal.Header className="d-flex justify-content-between">
          <Modal.Title>Sign Up</Modal.Title>
          <button className="btn" onClick={handleClose}>
            <IoMdClose />
          </button>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="d-flex w-100 justify-content-center gap-3">
              <div className="w-100">
                <InputController
                  label="User Name"
                  required={true}
                  className="w-100 form-control rounded focus-ring p-1 "
                  type="text"
                  placeholder="User Name"
                  name="userName"
                  control={control}
                />
              </div>
              <div className="w-100">
                <InputController
                  label="Email"
                  required={true}
                  className="w-100 form-control rounded focus-ring p-1 "
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  control={control}
                />
              </div>
            </div>
            <div className="d-flex w-100 justify-content-center gap-3 mt-3">
              <div className="w-100">
                <InputController
                  label="First Name"
                  required={true}
                  className="w-100 form-control rounded focus-ring p-1 mt-0"
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  control={control}
                />
              </div>
              <div className="w-100">
                <InputController
                  label="Last Name"
                  required={true}
                  className="w-100 form-control rounded focus-ring p-1 "
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  control={control}
                />
              </div>
            </div>
            <div className="d-flex w-100 justify-content-center gap-3 mt-3">
              <div className="w-100">
                <InputController
                  label="Contact Number"
                  required={true}
                  className="w-100 form-control rounded focus-ring p-1 "
                  type="Phone"
                  placeholder="Enter Contact Number"
                  maxlength={10}
                  name="contactNumber"
                  control={control}
                />
              </div>
            </div>
            <div className="d-flex w-100 justify-content-center gap-3 mt-3">
              <div className="w-100">
                <InputController
                  label="Password"
                  required={true}
                  className="w-100 form-control rounded focus-ring p-1 "
                  type="text"
                  placeholder="Enter Password"
                  name="password"
                  control={control}
                />
              </div>
              <div className="w-100">
                <InputController
                  label="Confirm Password"
                  required={true}
                  className="w-100 form-control rounded focus-ring p-1 "
                  type="text"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  control={control}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
            <button className="btn border-primary text-primary" type="submit">
              Sign Up
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
export default SignUpModal


