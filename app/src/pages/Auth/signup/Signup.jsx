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

const signupValidation = object({
  name: string().required("name is required"),
  surname: string().required("surname is required"),
  email: string().email("email is invalid").required("email is required"),
  password: string()
    .min(6, "password must be atleast 6 charactor")
    .required("password is required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "passwords must match")
    .required("repeat password is required"),
});

function Signup() {
  return (
    <div>
      <Container>
        <Center minH="100vh">
          <Card w="456px" borderRadius="1rem" p="6">
            <Text textStyle="h1">Welcome to Coin Sphare</Text>
            <Text textStyle="p2" color="black.60" mt="4">
              Create a Free account by filling Data below
            </Text>
            <Formik
              initialValues={{
                name: "",
                surname: "",
                email: "",
                password: "",
                repeatpassword: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={signupValidation}
            >
              <Form>
                <Stack mt="10" spacing="6">
                  <Flex gap="4">
                    <FormControl>
                      <FormLabel htmlFor="name"> Name</FormLabel>
                      <Field
                        as={Input}
                        name="name"
                        placeholder="enter name..."
                      />
                      <ErrorMessage name="name" component={Text} color="red.500" fontSize="sm" />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="surname">SurName</FormLabel>
                      <Field
                        as={Input}
                        name="surname"
                        placeholder="enter surname..."
                      />
                      <ErrorMessage name="surname" component={Text} color="red.500" fontSize="sm" />
                    </FormControl>
                  </Flex>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field
                      as={Input}
                      name="email"
                      placeholder="enter email..."
                    />
                    <ErrorMessage name="email" component={Text} color="red.500" fontSize="sm" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      name="password"
                      type="password"
                      placeholder="enter password..."
                    />
                    <ErrorMessage name="password" component={Text} color="red.500" fontSize="sm" />
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
                    <ErrorMessage name="repeatpassword" component={Text} color="red.500" fontSize="sm" />
                  </FormControl>
                  <Checkbox>
                    <Text textStyle="p3">
                      i agree with terms and Condition.
                    </Text>
                  </Checkbox>
                  <Button type="submit">Create Account</Button>
                  <Text>
                    Already have an Account?
                    <Link to="/Signin">
                      <Text as="span" color="p.purple">
                        Login
                      </Text>
                    </Link>
                  </Text>
                </Stack>
              </Form>
            </Formik>
          </Card>
        </Center>
      </Container>
    </div>
  );
}

export default Signup;
