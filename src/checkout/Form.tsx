import { useState } from "react";

export function UserDetails() {
    const [name, setName] = useState("");
    const  [address, setAdress] = useState("");
  
    return (
      <form>
        <label> Your first and last name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label> Your Adress:
          <input
            type="text" 
            value={address}
            onChange={(e) => setAdress(e.target.value)}
          />
        </label>
      </form>
    )
  }