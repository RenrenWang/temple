import React, { FC } from "react";


import { Route, Routes } from "react-router-dom";
import App from "@src/layout"
const AppRouter: FC<any> = () => {
  return (
    <Routes>
      <Route path="/*" element={<App/>}></Route>
    </Routes>
  );
};

export default AppRouter;
