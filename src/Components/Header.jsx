import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { logo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)

 
  function handleSignOutClick() {
   signOut(auth) 
      .then(() => {
        // Sign-out successful.
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // An error happened.
        navigate("/error") // build error page and use error object
      });
  }

  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);


  return (
    <div className="flex items-center">
      <div className="w-screen">
        <img
          src={logo}
          alt="Logo"
          className="px-5 py-2 block w-44"
        />
      </div>
      {user && <h3 className=" whitespace-nowrap text-xl text-white">Welcome {user.displayName}</h3>}
      {user && <button onClick={handleSignOutClick}
        className="bg-red-500 text-white mx-4 my-2 p-3  rounded-md hover:bg-red-800 transition duration-200 whitespace-nowrap text-xl"
      >
        Sign Out
      </button>}
    </div>
  );
};

export default Header;
