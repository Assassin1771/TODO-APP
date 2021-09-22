import { useState, React } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const AddTodo = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const toast = useToast();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (!todo) {
      toast({
        title: "NO TODO ITEM ",
        status: "error",
        duration: 3000,
      });

      return;
    }

    if (todo) {
      toast({
        title: "TODO ADDED TO LIST",
        status: "success",
        duration: 3000,
      });
    }

    const newTodo = {
      id: nanoid(),
      text: todo,
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  };

  return (
    <HStack>
      <Input
        placeholder="Add todo..."
        varaint="filled"
        value={todo}
        onChange={(e) => {
          handleChange(e);
        }}
      ></Input>
      <Button colorScheme="blue" px={8} onClick={() => addTodo()}>
        Add Todo
      </Button>
    </HStack>
  );
};

export default AddTodo;
