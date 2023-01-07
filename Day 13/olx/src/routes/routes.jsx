import AttributesPage from "../pages/AttributesPage";
import ErrorPage from "../pages/error";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import PostProductPage from "../pages/PostProductPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedPage from "./protected";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/addproduct",
    element: (
      <ProtectedPage needLogin={true}>
        <PostProductPage />
      </ProtectedPage>
    ),
  },
  {
    path: "/post",
    element: (
      <ProtectedPage needLogin={true}>
        <PostPage />
      </ProtectedPage>
    ),
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
  {
    path: "/post/attributes",
    element: (
      <ProtectedPage needLogin={true}>
        <AttributesPage />
      </ProtectedPage>
    ),
  },
  {
    path: "/item/:slug",
    element: <ItemPage />,
  },
];

export default routes;
