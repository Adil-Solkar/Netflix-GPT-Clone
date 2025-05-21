import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignUp,setIsSignUp] = useState(false)
    function handleSignUpClick(){
        setIsSignUp(prevState => !prevState)
    }

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="border bg-black opacity-90 m-5 min-w-lg">
        <form className="flex flex-col p-12">
            <h2 className="text-2xl text-white font-bold mb-8">{isSignUp ? 'Sign up' :'Sign In'}</h2>
            {isSignUp && <input type="text" placeholder="Full Name" className="mb-5 p-3 border border-white text-white "/>}
            <input type="text" placeholder="Email Address" className="mb-5 p-3 border border-white text-white "/>
            <input type="password" placeholder="Password" className="mb-5 p-3 border border-white text-white "/>
            <button className="bg-red-600 p-3 text-white rounded-md mb-5">{isSignUp ? 'Sign up' :'Sign In'}</button>
            <p className="text-white">{isSignUp ? 'Already a user?' : 'New to Netflix?' }
                 <span className="cursor-pointer hover:text-amber-100" onClick={handleSignUpClick}> 
                   {isSignUp ? ' Sign In' : ' Sign up now.'} 
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