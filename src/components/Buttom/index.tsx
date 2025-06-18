import React from 'react';
import { View , Pressable , Text} from 'react-native';

import { styles } from './styles';

interface ButtonProps {
  value: string;
  setpage:React.Dispatch<React.SetStateAction<boolean>>;
  page:boolean
}

export function Buttom({value , setpage , page}:ButtonProps) {
  return (
    <View >
        <Pressable onPress={()=>setpage(!page)}>
            <Text  style={styles.buttom}>{value}</Text>
        </Pressable>
    </View>
  );
}