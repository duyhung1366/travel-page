import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import * as React from 'react';

export function PrivateRoute() {
  const navigate = useNavigate();

  // check if user is logged in
  // if yes , show route
  // else , redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  if (!isLoggedIn) return <Navigate to="/login" />;

  return <Outlet />;
}
