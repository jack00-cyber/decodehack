import React from 'react';

function DemandeTile(props) {
  const { email, message, name, price, region} = props.demande;

  return (
    <div className='data-box'>
      <h2><strong>Name:</strong> {name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Region:</strong> {region}</p>
    </div>
  );
}

export default DemandeTile;
