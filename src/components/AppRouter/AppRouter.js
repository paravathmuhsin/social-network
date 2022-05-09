import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";

const Home = React.lazy(() => import("../../containers/Home/Home"));
const Login = React.lazy(() => import("../../containers/Login/Login"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h4>Loading</h4>}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
