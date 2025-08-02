import { useState, useEffect } from 'react';
import writeData from './config/writeData';
import Admin from './Admin'
import User from './User'

function MyApp() {
  const [page, setPage] = useState(
    
    <div className='login-container'>
      <div className='login-box'>
        <img src='./public/logo.webp'></img>
        <h1>Log In</h1>
        <button onClick={() => setPage(<Admin />)}>Admin</button>
        <button onClick={() => setPage(<User />)}>User</button>
      </div>
    </div>
  );




  /*useEffect(() => {
    const donation={
        price: 15000,
        email: 'yacinebekheddouma@gmail.com'
      }
    const insertData = async () => {
      try {
        await writeData('/donations', donation);

      } catch (err) {
        
      }
    };

    insertData();
  }, []);
*/
  return (<>
  {page}</>);
}

export default MyApp;
