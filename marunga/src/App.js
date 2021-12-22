import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEN naming convention
    <div className="app">
     
    
     <Header />
     <div className="app_body">
      <Sidebar />
 {/* App Body
        
        <Feed />
        <Widgets /> */}
     </div>
     
    
     </div>
  );
}

export default App;
