import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Loader from "../Loader/Loader";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectRefreshing } from "../../redux/auth/selectors";
import Refreshing from "../Refreshing/Refreshing";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const Contacts = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Layout>
      {isRefreshing ? (
        <Refreshing />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<Contacts />} redirectTo="/login" />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
}
