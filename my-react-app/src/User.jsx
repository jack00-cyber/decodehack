import { useState } from "react";
import writeData from './config/writeData.js';

function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const timestamp = Date.now();
    const data = {
      name,
      email,
      message,
      price,
      region,
      timestamp
    };

    try {
      await writeData("/demandes", data); // ✅ Firebase will generate the key
      alert("Demande submitted successfully!");

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setPrice("");
      setRegion("");
    } catch (error) {
      console.error("Error adding demande:", error);
      alert("Something went wrong!");
    }
  };

  return (
   <div>
   <div className='login box'>
      <div className='login-box'>
        <h2>Submit a Demande</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          /><br />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          /><br />

          <textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          /><br />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          /><br />

          <input
            type="text"
            placeholder="Region"
            value={region}
            onChange={e => setRegion(e.target.value)}
            required
          /><br />

          <button className="button2" type="submit">Submit</button>
        </form>
      </div>
    </div>
   <img src="./public/logo.webp" className="usimg"></img> 
  </div>
  );
}

export default User;
