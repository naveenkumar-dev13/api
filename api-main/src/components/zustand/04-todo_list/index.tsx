import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}
export const TodoList_UseState = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (!input) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="p-4 space-y-4 bg-gray-100 rounded max-w-md mx-auto ">
      <div className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Enter a todo"
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between bg-white px-4 py-2 rounded shadow"
          >
            <span>{todo.text}</span>
            <button
              className="bg-red-500 text-white px-2 rounded"
              onClick={() => deleteTodo(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export const TodoList_Zustand = () => {
//   const [input, setInput] = useState("");

//   return (
//     <div className="p-4 space-y-4 bg-gray-100 rounded max-w-md mx-auto">
//       <div className="flex gap-2">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="border p-2 flex-1 rounded"
//           placeholder="Enter a todo"
//         />
//         <button

//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Add
//         </button>
//       </div>

//       {/* <ul className="space-y-2">
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             className="flex justify-between bg-white px-4 py-2 rounded shadow"
//           >
//             <span>{todo.text}</span>
//             <button
//               onClick={() => removeTodo(todo.id)}
//               className="bg-red-500 text-white px-2 rounded"
//             >
//               X
//             </button>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default TodoList_Zustand;
