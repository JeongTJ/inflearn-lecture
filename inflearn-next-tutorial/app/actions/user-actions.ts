"use server";

// server action 방식
export async function searchUsers(name: string) {
	const DB = [
		{ id: 1, name: "Alice" },
		{ id: 2, name: "Bob" },
		{ id: 3, name: "Cgarli" },
	];

	return DB.filter((user) => user.name.includes(name));
}
