import React from 'react';
import Navigation from './Components/Navigation';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <div className=''>
        <Navigation />
      </div>

      <div>
      <Footer/>  
      </div>    
    </div>
  );
}

export default App;
