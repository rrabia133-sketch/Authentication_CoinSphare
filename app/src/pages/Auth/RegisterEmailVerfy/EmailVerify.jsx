import {
  Card,
  Icon,
  Container,
  Center,
  Text,
  Button,
  VStack,
  Box,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { sendverificationMail } from "../../../API/query/userQuery";

function EmailVerify() {
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email ?? "";

  console.log(email);

  if (email === "") {
    return <Center h="100vh">Invalid email</Center>;
  }

  const { isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["Register-Email-Verify"],
    queryFn: () => sendverificationMail({ email }),
    enabled: !!email,
  });

  if (isError) {
    toast({
      title: "Email Verification Failed",
      description: error.message,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Container>
      <Center minH="100vh">
        {isSuccess && (
          <Card w="456px" borderRadius="1rem" p="6">
            <VStack spacing="6">
              <Icon as={BiSolidMessageSquareDetail} boxSize="10" />
              <Text textStyle="h1">Verify your email</Text>
              <Text textStyle="p2" color="black.60" textAlign="center">
                We have sent a verification link to your email.
                <Box as="b" color="p.black">
                  {email}
                </Box>{" "}
                Please check your inbox and click on the link to verify your
                email address.
              </Text>
              <Box w="full">
                <Button
                  w="full"
                  variant="outline"
                  colorScheme="blue"
                  onClick={() => {
                    navigate("/signin");
                  }}
                >
                  Back to Signin
                </Button>
              </Box>
            </VStack>
          </Card>
        )}
      </Center>
    </Container>
  );
}

export default EmailVerify;
