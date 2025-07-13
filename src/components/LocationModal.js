import React, { useState } from 'react';
import './LocationModal.css';

const LocationModal = ({ onClose, onApply }) => {
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState('');
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [name, setName] = useState('');

const handleApply = async () => {
  if (!pincode.match(/^\d{6}$/)) {
    setError('Please enter a valid 6-digit pincode.');
    return;
  }
  try {
    const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    const data = await res.json();
    if (data[0].Status === 'Success' && data[0].PostOffice.length > 0) {
      const postOffice = data[0].PostOffice[0];
      const districtName = `${postOffice.District}, ${postOffice.State}`;
      if (showSignInForm && name) {
        localStorage.setItem('username', name);
        onApply(`${name}, ${districtName} ${pincode}`, name); // ✅ updated
      } else {
        onApply(`${districtName} ${pincode}`);
      }
      onClose();
    } else {
      setError('Invalid pincode. Please try again.');
    }
  } catch (error) {
    setError('Error fetching location. Try again.');
  }
};
  return (
    <div className="location-modal-overlay">
      <div className="location-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Choose your location</h2>
        <p>Select a delivery location to see product availability and delivery options</p>
        {!showSignInForm ? (
          <>
            <button className="sign-in-btn" onClick={() => setShowSignInForm(true)}>
              Sign in to see your addresses
            </button>
            <div className="divider">or enter an Indian pincode</div>
            <div className="pincode-input-group">
              <input
                type="text"
                placeholder="Enter pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <button className="apply-btn" onClick={handleApply}>Apply</button>
            </div>
          </>
        ) : (
          <>
            <div className="form-group mb-2">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label>Pincode</label>
              <input
                type="text"
                placeholder="Enter pincode"
                className="form-control"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <button className="apply-btn w-100" onClick={handleApply}>
              Sign In
            </button>
          </>
        )}
        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
};

export default LocationModal;