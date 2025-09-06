import { useState } from "react";
const UserDetails = () => {
interface User {
  id: number;
  name: string;
  age: number;
}

  
    const [item] = useState([
        { id: 1, name: "Matheus", age: 23 },
        { id: 2, name: "João", age: 18 },
        { id: 3, name: "Maria", age: 17 },
        { id: 3, name: "amanda", age: 16 },
        { id: 3, name: "João pedro", age: 19 },
    ]);

  return (
      <div>
        <h2>A seguinte lista com os nomes e verificação de idade: </h2>
        <ul>
          {item.map((item: User) => (
						<li key={item.id}>
							{item.name} - {item.age} anos
              {item.age >= 18 ? " (Maior de idade)" : " (Menor de idade)"}
						</li>))} 
             
        </ul>
      </div>
  )
}


export default UserDetails
