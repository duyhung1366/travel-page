import cityApi from 'apis/cityApi';
import studentApi from 'apis/studentApi';
import { PrivateRoute } from 'components/common';
import { AdminLayout, CartLayout } from 'components/layout';
import LoginPage from 'features/auth/pages/LoginPage';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}>
        {/* LOGIN PAGE */}
      </Route>

      <Route path="/" element={<AdminLayout />} />

      <Route path="/cart" element={<PrivateRoute />}>
        <Route path="/cart" element={<CartLayout />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
