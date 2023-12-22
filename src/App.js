import React from 'react';
import './App.css';
import MainContent from './main_content_src.js'; // Changed from 'main_content' to 'MainContent'
import Animations from './Animations.js'; // Changed from 'Animations' to 'Animations'

function App() {
  return (
    <div className='App'>
      <MainContent /> {/* Changed from 'main_content' to 'MainContent' */}
      <Animations /> {/* No change needed here as the component name already starts with a capital letter */}
    </div>
  );
}
export default App;
