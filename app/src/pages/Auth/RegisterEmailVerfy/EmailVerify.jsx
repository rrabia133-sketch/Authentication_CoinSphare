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
import { BiSolidMessageSquareDetail } from "react-icons/bi";

function EmailVerify() {
  return (
    <div>
      <Container>
        <Center minH="100vh">
          <Card w="456px" borderRadius="1rem" p="6">
            <VStack>
              <Icon
                as={BiSolidMessageSquareDetail}
                boxSize="48px"
                color="p.purple"
              ></Icon>

              <Text textStyle="h1">Email Verification</Text>
              <Text textStyle="p4">
                We have sent you an email verification to
                <Box as="b" color="p.black">
                  jenny.wilson@gmail.com.
                </Box>
                If you didn’t receive it, click the button below.
              </Text>
            </VStack>
            <br></br>
            <Button type="submit">ReSend Email</Button>
          </Card>
        </Center>
      </Container>
    </div>
  );
}

export default EmailVerify;
