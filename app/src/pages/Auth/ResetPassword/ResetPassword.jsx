import {
  Card,
  Container,
  Center,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  VStack,
  Spinner,
} from "@chakra-ui/react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { object, string, ref } from "yup";
import { verifyForgotToken } from "../../../API/query/userQuery";
import { useMutation } from "@tanstack/react-query";

//form validation schema
const resetValidation = object({
  password: string()
    .min(6, "password must be atleast 6 charactor")
    .required("password is required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "passwords must match")
    .required("repeat password is required"),
});

function ResetPassword() {
  // Initialize navigate and toast
  const navigate = useNavigate();
  const toast = useToast();
  const { token } = useParams();

  // Mutation for verifying forgot token and resetting password
  const { mutate, isLoading } = useMutation({
    MutationKey: ["verify-forgot-token"],
    MutationFn: verifyForgotToken,
    enabled: !!token,
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Password reset successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/Reset-success");
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
          <Card w="456px" borderRadius="1rem" p="6">
            <Text textStyle="h1">Reset Password</Text>
            <Text textStyle="p2" color="black.60" mt="4">
              Enter your new password.{" "}
            </Text>
            <Formik
              initialValues={{
                password: "",
                repeatpassword: "",
              }}
              onSubmit={(values) => {
                console.log(values);
                mutate({ token, password: values.password });
              }}
              validationSchema={resetValidation}
            >
              <Form>
                <Stack mt="10" spacing="6">
                  <FormControl>
                    <FormLabel htmlFor="password"> New Password</FormLabel>
                    <Field
                      as={Input}
                      name="password"
                      type="password"
                      placeholder="enter new password..."
                    />
                    <ErrorMessage
                      name="password"
                      component={Text}
                      color="red.500"
                      fontSize="sm"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="repeatpassword">
                      Repeat password
                    </FormLabel>
                    <Field
                      as={Input}
                      name="repeatpassword"
                      type="password"
                      placeholder="enter repeat password..."
                    />
                    <ErrorMessage
                      name="repeatpassword"
                      component={Text}
                      color="red.500"
                      fontSize="sm"
                    />
                  </FormControl>

                  <Button type="submit">Reset Password</Button>
                </Stack>
              </Form>
            </Formik>
          </Card>
        </Center>
      </Container>
    </div>
  );
}
export default ResetPassword;
