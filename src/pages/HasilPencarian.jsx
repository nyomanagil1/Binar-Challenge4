import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CarCard from '../components/CarCard/CarCard';
import Pencarian from '../components/Search/Pencarian';

function HasilPencarian() {
  return (
    <>
      <Header />
      <div class='d-flex justify-content-center'>
        <Pencarian />
      </div>
      <CarCard />
      <Footer />
    </>
  );
}

export default HasilPencarian;
