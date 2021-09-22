//import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Footer from "./footer";
import Length from "./components/Length";
import { HStack, VStack, Box, useToast } from "@chakra-ui/react";

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toast = useToast();

  const deleteTodo = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);

    toast({
      title: "TODO DELETED",
      status: "warning",
      duration: 3000,
    });
  };

  return (
    <>
      {/* <HStack pl={400} spacing={300}> */}
      <VStack>
        <Header />
        <Box
          w="100%"
          maxW={{ base: "80vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
        >
          <AddTodo todos={todos} setTodos={setTodos} />
          <Todos todos={todos} deleteTodo={deleteTodo} />
        </Box>
        {/* <Footer /> */}
      </VStack>
      {/* 
                    <VStack>
                      <Length todos={todos} />
                    </VStack> */}
      {/* </HStack> */}
    </>
  );
}

export default App;
