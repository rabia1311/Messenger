import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [picLoading, setPicLoading] = useState(false);

  const handleClick = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
      confirmPassword,
    };
    fetch("http://localhost:4000/chat/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Handle the response from the backend (if needed)
        // Assuming the response contains a JSON object with the _id property.
        return response.json();
      })
      .then((data) => {
        // Save the _id in local storage and display it in the console.
        if (data && data._id) {
          localStorage.setItem("_id", data._id);
          console.log("Response _id:", data._id);
        } else {
          console.error("Error: _id not found in the response");
        }
      })
      .catch((error) => {
        // Handle errors that occurred during the POST request.
        console.error("Error:", error);
      });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack
        spacing="5px"
        width="300px"
        margin="0 auto"
        padding="20px"
        border="1px solid #ccc"
        borderRadius="5px"
      >
        <FormControl id="first-name" isRequired>
          <FormLabel fontWeight="bold" color="#333">
            Name
          </FormLabel>
          <Input
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            padding="10px"
            border="1px solid #ccc"
            borderRadius="5px"
            width="100%"
          />
        </FormControl>
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
        <FormControl id="confirm-password" isRequired>
          <FormLabel fontWeight="bold" color="#333">
            Confirm Password
          </FormLabel>
          <InputGroup size="md">
            <Input
              type={show ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          type="submit"
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
          Sign Up
        </Button>
      </VStack>
    </form>
  );
};

export default Signup;
