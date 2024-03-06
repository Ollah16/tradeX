import './App.css'
import { Route, Routes } from "react-router-dom";
import Entry from './MainPage/Entry';
function App() {

  return (
    <Routes>
      <Route
        path='/'
        element={<Entry />}
      />


    </Routes>
  );
}

export default App;
