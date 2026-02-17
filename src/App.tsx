import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { SettingsPage } from './pages/SettingsPage';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
