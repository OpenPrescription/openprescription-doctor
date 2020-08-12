import React from "react";
import { useUser } from "../../contexts/User";
import Header from "../Header";
import Footer from "../Footer";
import GuestHeader from "../GuestHeader";

export default ({ children }) => {
  const user = useUser();
  return (
    <div className="op-container">
      {user ? <Header /> : <GuestHeader />}
      <main style={{ minHeight: 'calc(100vh - 140px)', background: '#FFF'}}>{children}</main>
      <Footer/>
    </div>
  );
};
