import React from 'react';
import NavBar from '../Components/NavBar';
import AddNote from '../Components/AddNotes';

const Home = () => {

  return (
    <div className='bg-gray-700 h-screen w-screen'>
     <NavBar/>
    <AddNote/>
        
    </div>
  );
}
export default Home;
