import {
  Card,
  Icon,
  Container,
  Center,
  Text,
  Button,
  VStack,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineGppGood } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { verifyEmailAddressSignup } from "../../../API/query/userQuery";

function RegisterSuccessfull() {
  const navigate = useNavigate();
  const toast = useToast();
  const { token } = useParams();

  const { isSuccess, isLoading } = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: () => verifyEmailAddressSignup({ token }),
    enabled: !!token,
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });

      navigate("/signup");
    },
  });

  if (isLoading) {
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
    <div>
      <Container>
        <Center minH="100vh">
          {isSuccess && (
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
                <Link to="/signin">Enter the APP</Link>
              </Button>
            </Card>
          )}
        </Center>
      </Container>
    </div>
  );
}

export default RegisterSuccessfull;
