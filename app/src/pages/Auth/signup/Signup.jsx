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
} from "@chakra-ui/react";

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
            <Stack mt="10">
              <Flex gap="4">
                <FormControl>
                  <FormLabel htmlFor="name"> Name</FormLabel>
                  <Input name="name" placeholder="enter name..." />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="surname">SurName</FormLabel>
                  <Input name="surname" placeholder="enter surname..." />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input name="email" placeholder="enter email..." />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="enter password..."
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="repeatpassword">Repeat password</FormLabel>
                <Input
                  name="repeatpassword"
                  type="password"
                  placeholder="enter repeat password..."
                />
              </FormControl>
              <Checkbox>
                <Text textStyle="p3">i agree with terms and Condition.</Text>
              </Checkbox>
            </Stack>
          </Card>
        </Center>
      </Container>
    </div>
  );
}

export default Signup;
