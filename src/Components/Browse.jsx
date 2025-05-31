import Header from "./Header";
import { auth } from "../utils/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

const Browse = () => {

  const navigate = useNavigate()

  function handleSignOutClick() {
   signOut(auth) 
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message)
        navigate("/error") // build error page and use error object
      });
  }

  return (
    <>
      <div className="flex">
        <Header />
        <button
          onClick={handleSignOutClick}
          className="bg-red-500 text-white mx-4 my-2 px-3 rounded-md hover:bg-red-600 transition duration-200 whitespace-nowrap text-xl"
        >
          Sign Out
        </button>
      </div>
    </>
  );
};

export default Browse;

/**
 *


 * 
 */
