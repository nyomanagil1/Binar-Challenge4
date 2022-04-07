import React from 'react';
import Header from '../components/Header/Header';
import CompHasilPencarian from '../components/SearchResult/CompHasilPencarian';
import Footer from '../components/Footer/Footer';
import CarCard from '../components/CarCard/CarCard';

function HasilPencarian() {
  return (
    <>
      <Header />
      <CompHasilPencarian />
      <CarCard />
      <Footer />
    </>
  );
}

export default HasilPencarian;
