import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

//paginas
const Login = React.lazy(() => import('./pages/Login/Login'));
const Register = React.lazy(() => import('./pages/Register/Register'));
const Grados = React.lazy(() => import('./pages/Grados/Grados'));
const Grado = React.lazy(() => import('./pages/Grado/Grado'));
const Materia = React.lazy(() => import('./pages/Materia/Materia'));

const App = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/" exact>
            {isAuth && <LoadingSpinner />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {!isAuth && <Login />}
            {isAuth && <Redirect to="/" />}
          </Route>
          <Route path="/register">
            {!isAuth && <Register />}
            {isAuth && <Redirect to="/" />}
          </Route>
          <Route path="/grados" exact>
            {isAuth && <Grados />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          <Route path="/grados/:grado" exact>
            {isAuth && <Grado />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          <Route path="/grados/:grado/:materia" exact>
            {isAuth && <Materia />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;