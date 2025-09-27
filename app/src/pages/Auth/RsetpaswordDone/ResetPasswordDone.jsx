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

function ResetPasswordDone() {
  return (
    <div>
      <Container>
        <Center minH="100vh">
          <Card w="456px" borderRadius="1rem" p="6">
            <VStack>
              <Icon as={MdOutlineGppGood} boxSize="48px" color="green"></Icon>

              <Text textStyle="h1">Password Reset Done</Text>
              <Text textStyle="p4">Now you can access you account.</Text>
            </VStack>
            <br></br>
            <Button>
              <Link to="/Signin">Sign In</Link>
            </Button>
          </Card>
        </Center>
      </Container>
    </div>
  );
}
export default ResetPasswordDone;
