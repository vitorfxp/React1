import { useState } from "react";

const ListRender = () => {
	const [users, setUsers] = useState([
		{ id: 1, name: "Matheus", age: 23 },
		{ id: 2, name: "João", age: 30 },
		{ id: 3, name: "Maria", age: 25 },
	]);

	const deleteRandom = () => {
		const randomNumber = Math.floor(Math.random() * 4);

		setUsers((prevUsers) => {
			return prevUsers.filter((users) => randomNumber !== users.id);
		});
	};

	return (
		<div>
			<div>
				<ul>
					{users.map((user) => (
						<li key={user.id}>
							{user.name} - {user.age} anos
						</li>
					))}
				</ul>
				<button type="button" onClick={deleteRandom}>
					{" "}
					remover{" "}
				</button>
			</div>
		</div>
	);
};

export default ListRender;