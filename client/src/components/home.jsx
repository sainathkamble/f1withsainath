import React from 'react';
import { Navbar } from './navbar.jsx';
import { Footer } from './footer.jsx';
import { GrandPrix } from './grandprix.jsx';
import { Drivers } from './drivers.jsx';
import { Teams } from './teams.jsx';
import { WhatIsF1 } from './whatIsF1.jsx';

export const Home = () => {
  return (
    <main>
      <Navbar />
      <GrandPrix />
      <Drivers />
      <Teams />
      <WhatIsF1/>
      <Footer />
    </main>
  )
}
