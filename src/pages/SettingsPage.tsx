import { Link } from 'react-router-dom';
import { SettingsForm } from '../components/SettingsForm';
import { DateSpotList } from '../components/DateSpotList';
import './SettingsPage.css';

export const SettingsPage = () => {
  return (
    <div className="settings-page">
      <header className="settings-header">
        <Link to="/" className="back-button">
          ← Back to Wheel
        </Link>
        <h1>⚙️ Settings</h1>
        <p className="settings-subtitle">Manage your date spots</p>
      </header>

      <div className="settings-content">
        <SettingsForm />
        <DateSpotList />
      </div>
    </div>
  );
};
