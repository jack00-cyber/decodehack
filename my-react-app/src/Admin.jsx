import React, { useEffect, useState } from 'react';
import Demande from './utils/Demande.jsx'
import Donation from './utils/Donation.jsx';

function Admin() {
  const [subPage,setSubPage] = useState(<Demande/>)
  

  return (
    <div>
  <div>
    <button className="button"onClick={() => setSubPage(<Demande />)}>Demande</button>
    <button className="button" onClick={() => setSubPage(<Donation />)}>Donations</button>
    {subPage}
  </div>
</div>
  );
}

export default Admin;
