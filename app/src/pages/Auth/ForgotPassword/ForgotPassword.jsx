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
} from "@chakra-ui/react";
import { FaLongArrowAltLeft } from "react-icons/fa";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { Link } from "react-router-dom";

const SigninValidation = object({
  email: string().email("email is invalid").required("email is required"),
});

export default function ForgotPassword() {
  return (
    <div>
      <Container>
        <Center minH="100vh">
          <Card w="456px" borderRadius="1rem" p="6">
            <Link to="/Signin">
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
                console.log(values);
              }}
              validationSchema={SigninValidation}
            >
              <Form>
                <Stack mt="10" spacing="6">
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field
                      as={Input}
                      name="email"
                      placeholder="enter email..."
                    />
                    <ErrorMessage
                      name="email"
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
