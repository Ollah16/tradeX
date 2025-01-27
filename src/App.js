import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import { NavProvider } from './context/navContext';
import { AppProvider } from './context/appContext';
function App() {

  return (
    <AppProvider>
      <NavProvider>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
        </Routes>
      </NavProvider>
    </AppProvider>
  );
}

export default App;
