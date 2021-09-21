import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

import { VStack, Box } from "@chakra-ui/react";

const initialTodos = [];

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
  };

  return (
    <VStack>
      <Header />
      <Box w="100%" maxW={{ base: "80vw", sm: "80vw", lg: "50vw", xl: "40vw" }}>
        <AddTodo todos={todos} setTodos={setTodos} />
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </Box>
    </VStack>
  );
}

export default App;
