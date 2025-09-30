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
  Icon,
  useToast,
} from "@chakra-ui/react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";

import { sendforgotMail } from "../../../API/query/userQuery";

const ForgotPasswordValidation = object({
  email: string().email("Email is invalid").required("Email is required"),
});

export default function ForgotPassword() {
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate, isPending } = useMutation({
    mutationKey: ["forgot-password"],
    mutationFn: sendforgotMail,
    onSuccess: (response, variables) => {
      toast({
        title: "Email Sent",
        description: "Password reset email has been sent successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate(`/Forgot-success/${encodeURIComponent(variables.email)}`);
    },
    onError: (error) => {
      toast({
        title: "Email Verification Failed",
        description: error.message || "Please check your email and try again",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return (
    <div>
      <Container>
        <Center minH="100vh">
          <Card w="456px" borderRadius="1rem" p="6">
            <Link to="/signin">
              <Icon as={FaLongArrowAltLeft}></Icon>
            </Link>
            <Text textStyle="h1">Forgot Password</Text>
            <Text textStyle="p2" color="black.60" mt="4">
              Enter your email address for which account you want to reset your
              password.
            </Text>
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(values) => {
                mutate(values);
              }}
              validationSchema={ForgotPasswordValidation}
            >
              <Form>
                <Stack mt="10" spacing="6">
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field
                      as={Input}
                      name="email"
                      type="email"
                      placeholder="Enter your email..."
                    />
                    <ErrorMessage
                      name="email"
                      component={Text}
                      color="red.500"
                      fontSize="sm"
                    />
                  </FormControl>

                  <Button isLoading={isPending} type="submit">
                    Reset Password
                  </Button>
                </Stack>
              </Form>
            </Formik>
          </Card>
        </Center>
      </Container>
    </div>
  );
}
