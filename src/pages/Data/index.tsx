import React from 'react';
import { View , Image ,TextInput} from 'react-native';

import { styles } from './styles';
import { Buttom } from '../../components/Buttom';

interface DataProps{
  setpage:React.Dispatch<React.SetStateAction<boolean>>;
  page:boolean
}

export function Data({setpage,page}:DataProps) {
  return (
    <View style={styles.container}>
         <Image style={styles.imagemin} source={require('../../../assets/images/sus.png')}/>
         <TextInput style={styles.texto1} placeholder='Nome'></TextInput>
         <TextInput style={styles.texto1} placeholder='Telefone'></TextInput>
         <TextInput style={styles.texto1} placeholder='Contato'></TextInput>
         <TextInput style={styles.texto1} placeholder='Localização Atual'></TextInput>
         <TextInput  multiline={true} style={styles.texto2} placeholder='Observações'></TextInput>
         <Buttom page={page} setpage={setpage} value="Enviar" />
         
    </View>
  );
}