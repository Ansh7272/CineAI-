import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateUserInput } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { HOME_IMG, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [sign, setsign] = useState(true);
  const [errormessage, seterrormessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  function onclickhandler() {
    setsign(!sign);
  }
  function onclickbuttonhandler() {
    const message = validateUserInput(
      email.current.value,
      password.current.value
    );
    seterrormessage(message);
    if (message) return;
    if (!sign) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;

          // update user details

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVATAR,
          })
            .then(() => {
              // Profile updated! 
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              
            })
            .catch((error) => {
              // An error occurred
              seterrormessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          seterrormessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          seterrormessage(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src={HOME_IMG}
          alt="Home img"
         className="h-screen object-cover md:h-auto md:object-contain"/>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="  absolute p-12 w-full md:w-3/12 h-125 my-50  md:my-36 left-0 right-0 mx-auto text-white bg-black opacity-80"
      >
        <h1 className="font-bold text-3xl mb-4">
          {sign ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {sign ? (
          " "
        ) : (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <p className="text-red-500 font-bold text-lg">{errormessage}</p>
        <button
          onClick={onclickbuttonhandler}
          className="rounded-lg cursor-pointer bg-red-700 p-4 w-full my-6"
        >
          {sign ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={onclickhandler}>
          {sign
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
