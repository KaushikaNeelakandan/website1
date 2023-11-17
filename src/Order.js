
import React, { useState } from 'react';

export default function Order() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [promotions, setPromotions] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Validate form data
    if (!name || !email || !phone || !address) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Send order data to server
    const orderData = {
      name,
      email,
      phone,
      address,
      shippingMethod,
      promotions,
    };

    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
        } else {
          setError('There was a problem submitting your order. Please try again later.');
        }
      })
      .catch(() => {
        setError('There was a problem submitting your order. Please try again later.');
      });
  }

  function isValidEmail(email) {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Your order was successfully submitted!</div>}
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} required />
      </label>
      <label>
        Address:
        <textarea value={address} onChange={(event) => setAddress(event.target.value)} required />
      </label>
      <label>
        Shipping Method:
        <select value={shippingMethod} onChange={(event) => setShippingMethod(event.target.value)}>
          <option value="">-- Please select --</option>
          <option value="standard">Standard Shipping</option>
          <option value="express">Express Shipping</option>
        </select>
      </label>
      <label>
        <input type="checkbox" checked={promotions} onChange={(event) => setPromotions(event.target.checked)} />
        Receive promotional emails
      </label>
      <button type="submit">Submit Order</button>
    </form>
  );
}
// export default function Order() {

// }
