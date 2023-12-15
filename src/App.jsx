import React from 'react';
import Card from './Components/Card';

const App = () => (
  <>
    <div className="App font-Rubik flex justify-center items-center lg:h-screen">
      <div className="All-Cards max-sm:flex-col md:justify-center md:flex-wrap flex lg:justify-around gap-10 max-sm:gap-2">
        <Card Discount="Discount" Left="$1050" Center="$750" Right="You Save 250$" Image="../public/Images/Laptop 1.jpg" />
        <Card Discount="No Discount" Center="$750" Image="../public/Images/Laptop 2.jpg" />
        <Card Discount="Free" Center="Free" Image="../public/Images/Laptop 3.jpg" />
      </div>
    </div>
  </>
);

export default App;
