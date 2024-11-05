import React from 'react'
import { Outlet } from 'react-router';

const Main = () => {
  return (
    <div className="font-poppins mx-auto max-w-7xl lg:px-2">
        <Outlet/>
    </div>
  );
}

export default Main