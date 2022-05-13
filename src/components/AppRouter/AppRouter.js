import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "../AppLayout/AppLayout";
import Fallback from "../Fallback/Fallback";

const Home = React.lazy(() => import("../../containers/Home/Home"));
const PostDetail = React.lazy(() => import("../../containers/Home/PostDetail"));
const Comments = React.lazy(() => import("../../containers/comments/comments"));
const CommentsDetail = React.lazy(() =>
  import("../../containers/comments/commentsDetail")
);
const Todos = React.lazy(() => import("../../containers/Todos/Todos"));
const TodosDetail = React.lazy(() =>
  import("../../containers/Todos/TodosDetail")
);
const Login = React.lazy(() => import("../../containers/Login/Login"));
const Photos = React.lazy(() => import("../../containers/Photos/Photos"));
const PhotoDetails = React.lazy(() =>
  import("../../containers/Photos/PhotoDetails")
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="post/:id" element={<PostDetail />} />
            <Route path="Photos" element={<Photos />} />
            <Route path="Photos/:id" element={<PhotoDetails />} />
            <Route path="comments" element={<Comments />} />
            <Route path="comments/:id" element={<CommentsDetail />} />
            <Route path="Todos" element={<Todos />} />
            <Route path="todos/:id" element={<TodosDetail />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
