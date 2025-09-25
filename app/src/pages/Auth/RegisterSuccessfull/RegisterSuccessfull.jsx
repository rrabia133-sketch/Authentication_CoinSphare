import {
  Card,
  Icon,
  Container,
  Center,
  Text,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";
import { MdOutlineGppGood } from "react-icons/md";
import { Link } from "react-router-dom";

function RegisterSuccessfull() {
  return (
    <div>
      <Container>
        <Center minH="100vh">
          <Card w="456px" borderRadius="1rem" p="6">
            <VStack>
              <Icon as={MdOutlineGppGood} boxSize="48px" color="green"></Icon>

              <Text textStyle="h1">Successfully Registration</Text>
              <Text textStyle="p4">
                Hurray! You have successfully created your account. Enter the
                app to explore all it’s features.
              </Text>
            </VStack>
            <br></br>
            <Button>
              <Link to="/Signin">Enter the APP</Link>
            </Button>
          </Card>
        </Center>
      </Container>
    </div>
  );
}

export default RegisterSuccessfull;
