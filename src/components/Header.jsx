import React,{useEffect} from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
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

  function onClickGptButtonhandler(){
     dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e)=>{
        dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className=" px-8 py-2 bg-gradient-to-b from-black absolute z-50 w-screen flex justify-between">
      <img
        src={LOGO}
        alt="logo"
        className="w-44"
      />
      {user && (
        
        <div className="flex p-2 items-center">
          {showGptSearch &&<select className="bg-gray-400 m-2" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang=>
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            )}
          </select>}
          <button className="rounded-lg px-2 py-2 mr-2 bg-sky-600 text-white" onClick={onClickGptButtonhandler}>{showGptSearch?"Homepage":"GPT Search"}</button>
          <img src={user?.photoURL} alt="profilelogo" className="w-9 h-9"/>
          <button onClick={handleSignout} className="text-white cursor-pointer">
            (Signout)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
