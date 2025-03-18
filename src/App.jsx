import React from 'react';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App