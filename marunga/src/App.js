import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    //BEN naming convention
    <div className="app">
     
    
     <Header />
     <div className="app_body">
      <Sidebar />
      <Feed />
      <App />
        
        
       {/* <Widgets /> */}
     </div>
     
    
     </div>
  );
}

export default App;
