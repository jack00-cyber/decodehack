
import readData from '../config/readData.js'; // This is the function I gave earlier

      import DonationTile from '../utils/donationTile.jsx'
import React, { useEffect, useState } from 'react';

function Donations(params) {
    
  const [donationList, setDonationList] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await readData('donations');
      const list = data ? Object.values(data) : [];
      setDonationList(list);
    } catch (error) {
      console.error('Error fetching donation data:', error);
    }
  };

  fetchData();
}, []);

    return (<div className='data-list' >
         {donationList.map((donation, idx) => (
  <DonationTile key={donation.id || idx} donation={donation} />
    ))}

         </div>);
}

export default Donations