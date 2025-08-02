import React, { useEffect, useState } from 'react';
import DemandeTile from './demandeTile';
import readData from '../config/readData';

function Demande() {
  const [demandeList, setDemandeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await readData('demandes');
      if (data) {
        const parsed = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        }));
        setDemandeList(parsed);
      }
    };

    fetchData();
  }, []);

  return (
    <div  >
      {demandeList.map((demande) => (
        <DemandeTile key={demande.id} demande={demande} />
      ))}
    </div>
  );
}

export default Demande;
