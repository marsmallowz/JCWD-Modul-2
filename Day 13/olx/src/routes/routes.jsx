import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PostProductPage from "../pages/PostProductPage";
import RegisterPage from "../pages/RegisterPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/addproduct", element: <PostProductPage /> },
];

export default routes;
