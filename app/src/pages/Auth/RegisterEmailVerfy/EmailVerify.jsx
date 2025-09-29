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
import { useMutation } from "@tanstack/react-query";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { sendverificationMail } from "../../../API/query/userQuery";
import { useEffect } from "react";

function EmailVerify() {
  const toast = useToast();
  const navigate = useNavigate();
  const { email } = useParams();

  console.log(email);

  if (email === "") {
    return <Center h="100vh">Invalid email</Center>;
  }

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationKey: ["Register-Email-Verify"],
    mutationFn: sendverificationMail,
    onSuccess: (data) => {
      console.log("Email sent successfully:", data);
      toast({
        title: "Email Sent",
        description: "Verification email has been sent successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
    onError: (error) => {
      toast({
        title: "Email Verification Failed",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  });

  // Automatically send email when component mounts
  useEffect(() => {
    if (email) {
      mutate({ email });
    }
  }, [email]);

  if (isPending) {
    return (
      <Container>
        <Center minH="100vh">
          <VStack spacing="4">
            <Spinner size="xl" color="p.purple" />
            <Text>Sending verification email...</Text>
          </VStack>
        </Center>
      </Container>
    );
  }

  return (
    <Container>
      <Center minH="100vh">
        {isSuccess && (
          <Card w="456px" borderRadius="1rem" p="6">
            <VStack spacing="6">
              <Icon
                as={BiSolidMessageSquareDetail}
                boxSize="10"
                color="p.purple"
              />
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
                  onClick={() => {
                    mutate({ email });
                  }}
                  isLoading={isPending}
                >
                  Re-send Email
                </Button>
              </Box>
            </VStack>
          </Card>
        )}
        {isError && (
          <Card w="456px" borderRadius="1rem" p="6">
            <VStack spacing="6">
              <Text textStyle="h1" color="red.500">
                Email Send Failed
              </Text>
              <Text textStyle="p2" color="black.60" textAlign="center">
                Failed to send verification email. Please try again.
              </Text>
              <Box w="full">
                <Button
                  w="full"
                  onClick={() => {
                    mutate({ email });
                  }}
                  isLoading={isPending}
                >
                  Try Again
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
