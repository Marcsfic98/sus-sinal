import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
        padding:"8%",
        justifyContent:'flex-start',
        alignSelf:"flex-start",
        width:'100%'
    },

    imagemin: {
        width:60,
        height:80,
        resizeMode:'contain',
        
  },
  texto1:{
    width:'100%',
    height:35,
    marginTop:30,
    borderColor:"#3e4094",
    borderWidth:2,
    borderRadius:10,
    paddingLeft:10
  },
  texto2:{
    width:'100%',
    height:180,
    marginTop:50,
    borderColor:"#3e4094",
    borderWidth:2,
    borderRadius:10,
    paddingLeft:10,
    textAlign:"left",
    padding:10,
    marginBottom:30
  }
});