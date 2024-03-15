import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import ButtonAppBar from '../components/ButtonAppBar';

export default function GuestLayout() {
  return (
    <>
      <ButtonAppBar />
      <div style={{ marginTop: '50px' }}>
      <Outlet />
      </div>
    </>
  );
}
