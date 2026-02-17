import { useDateSpotStore } from '../store/dateSpotStore';
import './WheelSpinner.css';

export const WheelSpinner = () => {
  const { dateSpots, isSpinning, spinWheel } = useDateSpotStore();

  const handleSpin = () => {
    if (!isSpinning && dateSpots.length > 0) {
      spinWheel();
    }
  };

  return (
    <div className="wheel-container">
      {dateSpots.length === 0 && (
        <div className="wheel-empty-message">
          <p>No date spots added yet!</p>
          <p className="wheel-empty-hint">Add some in Settings to get started</p>
        </div>
      )}
      <div className={`wheel ${isSpinning ? 'spinning' : ''}`}>
        <div className="wheel-content">
          {dateSpots.length > 0 && (
            <div className="wheel-segments">
              {Array.from({ length: 8 }).map((_, index) => {
                const spot = dateSpots[index];
                const anglePerSegment = 45; // 360 / 8 = 45 degrees per slice
                const rotation = anglePerSegment * index;

                // Calculate clip-path for equal pizza slice
                const angleRad = (anglePerSegment * Math.PI) / 180;
                const endX = 50 + 50 * Math.sin(angleRad);
                const endY = 50 - 50 * Math.cos(angleRad);
                const clipPath = `polygon(50% 50%, 50% 0%, ${endX.toFixed(3)}% ${endY.toFixed(3)}%)`;

                return (
                  <div
                    key={spot?.id || `empty-${index}`}
                    className="wheel-segment"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      clipPath: clipPath,
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="wheel-center">
          <button
            className="spin-button"
            onClick={handleSpin}
            disabled={isSpinning || dateSpots.length === 0}
          >
            SPIN
          </button>
        </div>
      </div>
      <div className="wheel-pointer"></div>
    </div>
  );
};
