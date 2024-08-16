import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BotsonicChat from './Botsonic';
import ARVRWidget from './ARVRWidget';


const App = () => {
  return (
    <div className='position-relative'>
      <ARVRWidget/>
      <BotsonicChat/>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer autoClose={1000} />
      
    </div>
  );
};

export default App;
