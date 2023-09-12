import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding:30
    },
    texts:{
      color:'red',
      fontSize:22
    },
    tInputs:{
      alignItems: 'center',
      fontSize:10,
      margin:3,
      backgroundColor: 'orange',
      textAlign:'center', 
      borderRadius:1, 
      borderWidth:1, 
      borderColor:'black'
    }
  });

  const myimage = StyleSheet.create({
    images:{
        width:'100%',
        height:'100%'
    }
  })



  export {styles, myimage}