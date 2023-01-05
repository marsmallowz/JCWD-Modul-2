import AttributesPage from "../pages/AttributesPage";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import PostProductPage from "../pages/PostProductPage";
import RegisterPage from "../pages/RegisterPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/addproduct", element: <PostProductPage /> },
  { path: "/item", element: <ItemPage /> },
  { path: "/post", element: <PostPage /> },
  { path: "/post/attributes", element: <AttributesPage /> },
];

export default routes;
