import { useRef, useState } from "react";
import Header from "./Header";
import {validateFormData} from '../utils/validate'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage,setErrorMessage] = useState(null)

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function handleSignUpClick() {
    setIsSignUp((prevState) => !prevState);
  }

  function handleButtonClick(e){
    e.preventDefault()
    const errorMessage = validateFormData(fullName?.current?.value,email?.current?.value,password?.current?.value,isSignUp)
    // console.log(errorMessage)
    setErrorMessage(errorMessage)
  }

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="border bg-black opacity-90 m-5 min-w-lg">
          <form className="flex flex-col p-12">
            <h2 className="text-2xl text-white font-bold mb-8">
              {isSignUp ? "Sign up" : "Sign In"}
            </h2>
            {isSignUp && (
              <input
                ref={fullName}
                type="text"
                placeholder="Full Name"
                className="mb-5 p-3 border border-white text-white "
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="mb-5 p-3 border border-white text-white "
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="mb-5 p-3 border border-white text-white "
            />
            {errorMessage && <p className="text-red-500 text-lg font-bold tracking-wide mb-5">{errorMessage}</p>}
            <button onClick={handleButtonClick} className="bg-red-600 p-3 text-white rounded-md mb-5">
              {isSignUp ? "Sign up" : "Sign In"}
            </button>
            <p className="text-white">
              {isSignUp ? "Already a user?" : "New to Netflix?"}
              <span
                className="cursor-pointer hover:text-amber-100"
                onClick={handleSignUpClick}
              >
                {isSignUp ? " Sign In" : " Sign up now."}
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

/* bg-image <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_medium.jpg"
          alt="background image"
        />
      </div> */
