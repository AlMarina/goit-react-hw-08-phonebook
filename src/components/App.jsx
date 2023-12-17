import { Suspense, lazy, useEffect } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../redux/contactsSlice';
import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/auth/authSlice';
import * as ROUTES from '../constants/routes.js';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactPage = lazy(() => import('pages/ContactPage/ContactPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <ContactPage />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  // const isLoading = useSelector(state => state.contactStore.isLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  // console.log();

  return (
    // <div>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   {isLoading && <Loader />}
    //   <ContactList />
    // </div>

    <SharedLayout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contacts" element={<ContactPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route> */}
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          {/* </Route> */}
        </Routes>
      </Suspense>

      {/* <Toaster /> */}
    </SharedLayout>
  );
};
