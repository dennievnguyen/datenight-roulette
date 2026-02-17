import { Link } from 'react-router-dom';
import { useDateSpotStore } from '../store/dateSpotStore';
import { WheelSpinner } from '../components/WheelSpinner';
import { DateSpotCard } from '../components/DateSpotCard';
import './MainPage.css';

export const MainPage = () => {
  const { resetWheel, spinWheel, hasSpun, isSpinning, dateSpots } = useDateSpotStore();

  const handleRespin = () => {
    if (!isSpinning && dateSpots.length > 0) {
      spinWheel();
    }
  };

  return (
    <div className="main-page">
      <header className="main-header">
        <h1>♥️♠️ DateNight Roulette</h1>
        <p className="subtitle">Spin the wheel and discover your next date spot!</p>
        <div className="settings-container">
          <Link to="/settings" className="settings-link">
            ⚙️
          </Link>
        </div>
      </header>

      <div className="main-content">
        <WheelSpinner />

        <div className="action-buttons">
          <button
            className="reset-button"
            onClick={resetWheel}
            disabled={!hasSpun || isSpinning}
          >
            🔄 Reset
          </button>
          <button
            className="respin-button"
            onClick={handleRespin}
            disabled={!hasSpun || isSpinning || dateSpots.length === 0}
          >
            🎲 Respin
          </button>
        </div>

        <DateSpotCard />
      </div>

      <footer className="main-footer">
        <p>Add date spots in settings to get started!</p>
      </footer>
    </div>
  );
};
