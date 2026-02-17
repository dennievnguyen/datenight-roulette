import { useDateSpotStore } from '../store/dateSpotStore';
import './DateSpotCard.css';

export const DateSpotCard = () => {
  const { currentSpot, hasSpun, resetWheel } = useDateSpotStore();

  if (!hasSpun || !currentSpot) {
    return null;
  }

  return (
    <div className="date-spot-overlay">
      <div className="date-spot-card">
        <button className="close-button" onClick={resetWheel} aria-label="Close">
          ✕
        </button>
        <div className="card-header">
          <h2>🎉 Your Date Spot!</h2>
        </div>
        <div className="card-content">
          <h3 className="spot-name">{currentSpot.name}</h3>
          <div className="spot-details">
            {currentSpot.priceRange && (
              <div className="detail-item">
                <span className="detail-label">Price Range:</span>
                <span className="detail-value">{currentSpot.priceRange}</span>
              </div>
            )}
            {currentSpot.neighbourhood && (
              <div className="detail-item">
                <span className="detail-label">Neighbourhood:</span>
                <span className="detail-value">{currentSpot.neighbourhood}</span>
              </div>
            )}
            {currentSpot.googleRatings && (
              <div className="detail-item">
                <span className="detail-label">Google Ratings:</span>
                <span className="detail-value">⭐ {currentSpot.googleRatings}/5</span>
              </div>
            )}
            {currentSpot.cuisineTypes && (
              <div className="detail-item">
                <span className="detail-label">Cuisine:</span>
                <span className="detail-value">{currentSpot.cuisineTypes}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
