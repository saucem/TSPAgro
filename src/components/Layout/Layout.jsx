import { Outlet } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
        <Outlet />
      </main>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Footer />
    </>
  );
}

export default Layout;
