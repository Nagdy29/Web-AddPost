import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Default from "../layout/Default";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Blog from "../pages/blog/Blog";
import Newpost from "../pages/blog/Newpost";
import Article from "../pages/blog/Article";
import AutLaout from "../layout/AutLaout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import { AuthContext } from "../AuthContext";

const Mainrouter = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Route>

      <Route path="/blog" element={<Default />}>
        <Route index element={<Blog />} />
        {isAuth ? (
          <Route path="/blog/new" element={<Newpost />} />
        ) : (
          <Route path="/blog/new" element={<Navigate to="/login" replace />} />
        )}

        <Route path=":slug" element={<Article />} />
      </Route>

      <Route path="/" element={<AutLaout />}>
        {!isAuth ? (
          <Route path="login" element={<Login />} />
        ) : (
          <Route path="login" element={<Navigate to="/" replace />} />
        )}

        {!isAuth ? (
          <Route path="signup" element={<Signup />} />
        ) : (
          <Route path="signup" element={<Navigate to="/" replace />} />
        )}
      </Route>
    </Routes>
  );
};

export default Mainrouter;
