import {
  Card,
  Container,
  Center,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Flex,
  Checkbox,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, ref } from "yup";

const SigninValidation = object({
  email: string().email("email is invalid").required("email is required"),
  password: string()
    .min(6, "password must be atleast 6 charactor")
    .required("password is required"),
});

function Signin() {
  return (
    <div>
      <Container>
        <Center minH="100vh">
          <Card w="456px" borderRadius="1rem" p="6">
            <Text textStyle="h1">Welcome to Coin Sphare</Text>
            <Text textStyle="p2" color="black.60" mt="4">
              Enter your credentials to access the account.
            </Text>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={SigninValidation}
            >
              <Form>
                <Stack mt="10" spacing="6">
                  <Flex gap="4"></Flex>
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
                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      name="password"
                      type="password"
                      placeholder="enter password..."
                    />
                    <ErrorMessage
                      name="password"
                      component={Text}
                      color="red.500"
                      fontSize="sm"
                    />
                  </FormControl>
                  <Flex gap="150px">
                    <Checkbox>
                      <Text textStyle="p3">Remember me</Text>
                    </Checkbox>
                    <Link to="/ForgotPassword">
                      <Text as="span" color="p.purple">
                        Forgot Password?
                      </Text>
                    </Link>
                  </Flex>

                  <Button type="submit">Login</Button>
                  <Button variant="outline">
                    <Link to="/Signup">Create NEW Account </Link>
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

export default Signin;
