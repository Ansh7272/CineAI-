import React,{useEffect} from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.

      });
  };
  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    // ...
    navigate('/browse');
  } else {
    // User is signed out
    // ...
    dispatch(removeUser ()); 

    navigate('/');
  }
});

  // unsubscribe

    return ()=>unsubscribe();

  },[])
  return (
    <div className=" px-8 py-2 bg-gradient-to-b from-black absolute z-50 w-screen flex justify-between">
      <img
        src={LOGO}
        alt="logo"
        className="w-44"
      />
      {user && (
        <div className="flex justify-between w-25 items-center">
          <img src={user?.photoURL} alt="profilelogo" className="w-9 h-9"/>
          <button onClick={handleSignout} className="text-white cursor-pointer">
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
