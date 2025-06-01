import { auth } from "../utils/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  function handleSignOutClick() {
   signOut(auth) 
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // An error happened.
        navigate("/error") // build error page and use error object
      });
  }
  return (
    <div className="flex items-center">
      <div className="w-screen">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
