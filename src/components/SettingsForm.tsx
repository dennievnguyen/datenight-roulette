import { useState, type FormEvent, useRef } from 'react';
import { useDateSpotStore } from '../store/dateSpotStore';
import './SettingsForm.css';

export const SettingsForm = () => {
  const { addDateSpot } = useDateSpotStore();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    priceRange: '',
    neighbourhood: '',
    googleRatings: '',
    cuisineTypes: '',
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name.trim()) {
      setError('Name is required!');
      return;
    }

    addDateSpot({
      name: formData.name.trim(),
      priceRange: formData.priceRange.trim() || undefined,
      neighbourhood: formData.neighbourhood.trim() || undefined,
      googleRatings: formData.googleRatings ? parseFloat(formData.googleRatings) : undefined,
      cuisineTypes: formData.cuisineTypes.trim() || undefined,
    });

    // Reset form
    setFormData({
      name: '',
      priceRange: '',
      neighbourhood: '',
      googleRatings: '',
      cuisineTypes: '',
    });

    // Dismiss mobile keyboard
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setSuccess('Date spot added successfully!');

    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit} ref={formRef}>
      <h2>Add New Date Spot</h2>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <div className="form-group">
        <label htmlFor="name">
          Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g., The Italian Kitchen"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="priceRange">Price Range</label>
        <input
          type="text"
          id="priceRange"
          name="priceRange"
          value={formData.priceRange}
          onChange={handleChange}
          placeholder="e.g., $$, $20-$40"
        />
      </div>

      <div className="form-group">
        <label htmlFor="neighbourhood">Neighbourhood</label>
        <input
          type="text"
          id="neighbourhood"
          name="neighbourhood"
          value={formData.neighbourhood}
          onChange={handleChange}
          placeholder="e.g., Downtown, Midtown"
        />
      </div>

      <div className="form-group">
        <label htmlFor="googleRatings">Google Ratings</label>
        <input
          type="number"
          id="googleRatings"
          name="googleRatings"
          value={formData.googleRatings}
          onChange={handleChange}
          placeholder="e.g., 4.5"
          min="0"
          max="5"
          step="0.1"
        />
      </div>

      <div className="form-group">
        <label htmlFor="cuisineTypes">Cuisine Types</label>
        <input
          type="text"
          id="cuisineTypes"
          name="cuisineTypes"
          value={formData.cuisineTypes}
          onChange={handleChange}
          placeholder="e.g., Italian, Pizza, Pasta"
        />
      </div>

      <button type="submit" className="submit-button">
        Add Date Spot
      </button>
    </form>
  );
};
