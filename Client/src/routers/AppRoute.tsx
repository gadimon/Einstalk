import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddNewPuzzle from "../pages/AddNewPuzzle/AddNewPuzzle";
import Welcome from "../pages/welcome/Welcome";
import Puzzle from "../pages/Puzzle";
import Users from "../pages/Users";
import Profile from "../pages/profile-page/Profile";
import AddNewUser from "../pages/AddNewUser";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/loginPage/LoginPage";
import DialogComp from "../components/dialog-comp/DialogComp";
import { useContext, useEffect } from "react";
import { BooleanProps, isKeyPressContext } from "../Provider/CookieProvider";
import PrivateRoute from "../protected/privateRoute";

export default function AppRoute() {
  const isAuth = useContext<BooleanProps>(isKeyPressContext);
  useEffect(() => {
    console.log(isAuth.isPress);
  }, [isAuth.isPress]);
  return (
    <div>
      {isAuth.isPress && <DialogComp />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/puzzle/:id" element={<Puzzle />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/addNewUser" element={<PrivateRoute adminOnly><AddNewUser /></PrivateRoute>} />
        <Route path="/puzzle/addNewPuzzle" element={<PrivateRoute adminOnly><AddNewPuzzle /></PrivateRoute>} />
      </Routes>
    </div>
  );
}
