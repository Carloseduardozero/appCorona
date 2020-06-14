import React, { useState} from "react";
import api from '../../services/api'
import {
   
    Container,
    Header,
    TextHeader,
    StatusBar,
    CalloutContent,
    CalloutText,
  } from "./styles";
  import { View, Text, TouchableOpacity,TextInput} from "react-native";

  import Style2 from './Style2';
  import SearchController from '../../Controller/SearchController';

  

export default function Pesquisa({navigation}){

    const [name, setName] = useState('');

    
   
    

    return(

     

        <Container>
      <StatusBar barStyle="light-content" backgroundColor="#e02041" />
      <Header>
        <TextHeader>COVID-19</TextHeader>
      
      </Header>
      <View>
          <TouchableOpacity
         
          onPress={() => navigation.navigate("Home")}
        >
          <Text>
            Ver mapa
          </Text>
        </TouchableOpacity>
       <View>
       <Text>Escreva a UF:</Text>
          <TextInput style={Style2.input}  type="text" onChangeText={(name) => { setName(name); }}/>
          <TouchableOpacity onPress={() => { SearchController(name, navigation); }}><Text>Exibir</Text></TouchableOpacity>
       </View>



      </View>
      </Container>

     
    );
};

