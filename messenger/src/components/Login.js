import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [picLoading, setPicLoading] = useState(false);

  const handleClick = () => setShow(!show);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPicLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/chat/login", {
        email,
        password,
      });

      // Assuming the server returns an object with "_id" field
      const { _id, name } = response.data;

      // Store the _id in localStorage
      localStorage.setItem("_id", _id);
      localStorage.setItem("name", name);

      // Navigate to the home page ("/")
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error here (e.g., show error message to the user)
    }

    setPicLoading(false);
  };

  const handleLoginAsGuest = () => {
    fetch("http://localhost:4000/chat/create-guest-user", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Guest User Data:", data._id, data.email, data.name); // Print the required properties
        // Perform other actions with the data as needed
      })
      .catch((error) => {
        console.error("Error creating Guest User:", error);
      });
    navigate("/home");
  };

  return (
    <form
      onSubmit={handleSubmit}
      // Add any additional form attributes or styles here
    >
      <VStack
        spacing="5px"
        width="300px"
        margin="0 auto"
        padding="20px"
        border="1px solid #ccc"
        borderRadius="5px"
      >
        <FormControl id="email" isRequired>
          <FormLabel fontWeight="bold" color="#333">
            Email Address
          </FormLabel>
          <Input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            padding="10px"
            border="1px solid #ccc"
            borderRadius="5px"
            width="100%"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel fontWeight="bold" color="#333">
            Password
          </FormLabel>
          <InputGroup size="md">
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              padding="10px"
              border="1px solid #ccc"
              borderRadius="5px"
              width="100%"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          type="submit" // Set the button type to "submit"
          colorScheme="blue"
          width="100%"
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          isLoading={picLoading}
        >
          Login
        </Button>

        <Button onClick={handleLoginAsGuest}>Login as Guest</Button>
      </VStack>
    </form>
  );
};

export default Login;
