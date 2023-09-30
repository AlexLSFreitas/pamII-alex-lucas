import React from "react";
import { Button, Container, Image } from "native-base";
import { Box, Center, NativeBaseProvider } from "native-base";
import { Input } from "native-base";
import { TouchableOpacity } from "react-native";

const App = () => {
  return(

    <NativeBaseProvider>
      <Container display="flex" alignItems="center" alignSelf="center" minW="100%" minH="100%" backgroundColor="#422680">
         <Image source={require('./pic.png')} size={200} mt={250}/>
        <Input placeholder="Email" size="md" w="80%"mt="50" color="#FFF" fontFamily="Verdana"/>
        <Input placeholder="Senha" type = "password"size="md" w="80%" mt={5} color="#FFF" fontFamily="Verdana"/>
       <Input placeholder="Confirme a senha" type = "password" size="md" w="80%" mt={5} color="#FFF" fontFamily="Verdana"/>
       <Button width="80%" textTransform="uppercase" mt={10} backgroundColor="#BBBeeF" color="#000" variant="ghost"
        colorScheme="#000" fontWeight="bold">
        login</Button>

    <Container display="flex" flexDirection="row" width="80%" justifyContent="space-around" mt = "5" fontWeight="bold"
     textTransform="uppercase" fontSize="10" fontFamily="Verdana" color = "#2196f3">
        <TouchableOpacity >
          Esqueceu a senha?
        </TouchableOpacity>

        <TouchableOpacity>
          Criar uma conta
        </TouchableOpacity>
        </Container>
      </Container>
    </NativeBaseProvider>

  )}
export default App

