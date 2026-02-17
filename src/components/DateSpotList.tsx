import { useDateSpotStore } from '../store/dateSpotStore';
import './DateSpotList.css';

export const DateSpotList = () => {
  const { dateSpots, removeDateSpot } = useDateSpotStore();

  const handleDelete = (id: string, name: string) => {
      removeDateSpot(id);
  };

  if (dateSpots.length === 0) {
    return (
      <div className="date-spot-list empty">
        <p>No date spots added yet. Add your first one above!</p>
      </div>
    );
  }

  return (
    <div className="date-spot-list">
      <h2>Your Date Spots ({dateSpots.length})</h2>
      <div className="spot-grid">
        {dateSpots.map((spot) => (
          <div key={spot.id} className="spot-card">
            <div className="spot-card-header">
              <h3>{spot.name}</h3>
              <button
                className="delete-button"
                onClick={() => handleDelete(spot.id, spot.name)}
                aria-label="Delete"
              >
                ×
              </button>
            </div>
            <div className="spot-card-body">
              {spot.priceRange && (
                <div className="spot-info">
                  <span className="info-label">Price:</span>
                  <span>{spot.priceRange}</span>
                </div>
              )}
              {spot.neighbourhood && (
                <div className="spot-info">
                  <span className="info-label">Area:</span>
                  <span>{spot.neighbourhood}</span>
                </div>
              )}
              {spot.googleRatings && (
                <div className="spot-info">
                  <span className="info-label">Rating:</span>
                  <span>⭐ {spot.googleRatings}</span>
                </div>
              )}
              {spot.cuisineTypes && (
                <div className="spot-info">
                  <span className="info-label">Cuisine:</span>
                  <span>{spot.cuisineTypes}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
