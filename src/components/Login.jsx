import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateUserInput } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [sign, setsign] = useState(true);
  const [errormessage, seterrormessage] = useState("");
  const navigate = useNavigate();
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
            photoURL:
              "https://avatars.githubusercontent.com/u/120785449?s=400&v=4",
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
              navigate("/browse");
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
          navigate("/browse");
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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="Home img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="  absolute p-12 w-3/12 h-125  my-36 left-0 right-0 mx-auto text-white bg-black opacity-80"
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
