import React from 'react';
import { View , Image } from 'react-native';

import { styles } from './styles';
import { Buttom } from '../../components/Buttom';

interface HomeProps {
  setpage:React.Dispatch<React.SetStateAction<boolean>>
  page:boolean
}

export function Home({setpage ,page}:HomeProps) {
  return (
    <View >
        <Image style={styles.image} source={require('../../../assets/images/sus.png')}/>
        <Buttom page={page} setpage={setpage} value="Pedir socorro"/>
    </View>
  );
}