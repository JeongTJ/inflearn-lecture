"use client";

import { Button, Input } from "@material-tailwind/react";
import Todo from "../components/todo";
import { createTodo, getTodos } from "actions/todo-actions";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function UI() {
	const [searchInput, setSearchInput] = useState("");

	const todosQuery = useQuery({
		queryKey: ["todos", searchInput],
		queryFn: () => getTodos({ searchInput }),
	});

	const createTodoMutation = useMutation({
		mutationFn: () =>
			createTodo({
				title: "New Todo",
				completed: false,
			}),
		onSuccess: () => {
			todosQuery.refetch();
		},
	});

	return (
		<div className="w-2/3 mx-auto flex flex-col items-center pt-10">
			<h1 className="text-xl">TODO LIST</h1>
			<Input
				label="Search TODO"
				placeholder="Search TODO"
				icon={<i className="fas fa-search" />}
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
			/>

			{todosQuery.isLoading && <p>Loading...</p>}
			{todosQuery.data &&
				todosQuery.data.map((todo) => (
					<Todo key={todo.id} todo={todo} />
				))}
			<Button
				onClick={() => createTodoMutation.mutate()}
				loading={createTodoMutation.isPending}
			>
				<i className="fas fa-plus mr-2" />
				ADD TODO
			</Button>
		</div>
	);
}
