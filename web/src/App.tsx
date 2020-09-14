import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// styles
import GlobalStyle from './styles/global';

// pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <SignUp />
    </>
  );
};

export default App;
