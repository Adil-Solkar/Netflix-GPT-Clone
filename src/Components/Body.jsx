import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import { useEffect } from "react";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from "../utils/userSlice"

function Body() {
  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
      } else {
        dispatch(removeUser())
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default Body;
