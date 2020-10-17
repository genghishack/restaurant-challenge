import React from 'react';
import RestaurantTable from './components/RestaurantTable';
import 'minireset.css';
import './App.scss';

console.log(process.env);


const App: React.FC = () => {
  return (
    <div className="App">
      <RestaurantTable/>
    </div>
  );
}

export default App;
