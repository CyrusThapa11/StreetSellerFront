import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import "./index.css";
import LoginForm from "./LoginForm";
import SignInForm from "./SignUpForm";
const Index = () => {
  const [state, setstate] = useState(0);
  return (
    <Box className="bg-1" minH="100vh" w="full">
      <Box>
        {state ? (
          <LoginForm toggleLogin={setstate} />
        ) : (
          <SignInForm toggleLogin={setstate} />
        )}
      </Box>
    </Box>
  );
};

export default Index;
