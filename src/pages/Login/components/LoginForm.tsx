import { FormControl, Text, VStack, Link } from "@chakra-ui/react";
import { useState } from "react";

import { Button } from "../../../components/Button";
import { FormInput } from "../../../components/FormInput";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    console.log({
      email,
      password,
    });
  }

  return (
    <VStack alignItems={"flex-start"} w={"60%"} maxWidth="40rem">
      <Text
        fontFamily={"Poppins"}
        fontWeight="Semi Bold"
        fontSize="2.2rem"
        color="formTitle.900"
        mb={"2rem"}
      >
        {" "}
        Login{" "}
      </Text>
      <FormControl>
        <FormInput
          type="email"
          mb={"1rem"}
          label=""
          placeholder="E-mail"
          value={email}
          onChange={(text) => setEmail(text.target.value)}
        />

        <FormInput
          type="password"
          placeholder="Senha"
          label=""
          onChange={(text) => setPassword(text.target.value)}
          value={password}
        />
        <VStack mt={"1rem"} 
                alignItems={"center"} 
                color={"inputLabel.900"} 
                fontFamily={"Poppins"}
                fontWeight="Bold">
          <Link href="" isExternal>
            <Text>Recuperar senha</Text>
          </Link>
        </VStack>

        <VStack alignItems={"center"}>
          <Button
            onClick={onSubmit}
            label="Entrar"
            width={"50%"}
            background="primary.900"
            _active={{ opacity: 0.1 }}
            _hover={{ background: "primary.900" }}
            mt={"2rem"}
          />
        </VStack>

        <VStack mt={"1rem"} 
                alignItems={"center"} 
                color={"inputLabel.900"} 
                fontFamily={"Poppins"}
                fontWeight="Bold">
          <Link href="" isExternal>
            <Text>Criar conta</Text>
          </Link>
        </VStack>
      </FormControl>
    </VStack>
  );
}
