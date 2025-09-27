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
} from "@chakra-ui/react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, ref } from "yup";

const resetValidation = object({
  password: string()
    .min(6, "password must be atleast 6 charactor")
    .required("password is required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "passwords must match")
    .required("repeat password is required"),
});

function ResetPassword() {
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
              }}
              validationSchema={resetValidation}
            >
              <Form>
                <Stack mt="10" spacing="6">
                  <FormControl>
                    <FormLabel htmlFor="password"> New Password</FormLabel>
                    <Field
                      as={Input}
                      name="new-password"
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
