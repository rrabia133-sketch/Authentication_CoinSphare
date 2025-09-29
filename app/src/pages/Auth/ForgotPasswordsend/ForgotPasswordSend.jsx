import {
  Card,
  Icon,
  Container,
  Center,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { MdOutlineGppGood } from "react-icons/md";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";

function ForgotPasswordSend() {
  const param = useParams();
  const { email } = param;
  return (
    <div>
      <Container>
        <Center minH="100vh">
          <Card w="456px" borderRadius="1rem" p="6">
            <VStack>
              <Icon as={MdOutlineGppGood} boxSize="48px" color="green"></Icon>

              <Text textStyle="h1">Successfully Sent</Text>

              <Text textStyle="p4">
                We have sent instructions on how to reset your password to
                <Box as="b" color="p.black">
                  {email}
                </Box>
                Please follow the instructions from the email.
              </Text>
            </VStack>
          </Card>
        </Center>
      </Container>
    </div>
  );
}

export default ForgotPasswordSend;
