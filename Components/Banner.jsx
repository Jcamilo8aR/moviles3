import { View, Text, Image} from "react-native";
import {styles, myimage} from '../assets/styles/styles1'


function Banner(props) {
    return (
      <Image 
      style={{width:'100%', height:'30%', resizeMode:'stretch'}}
        source={require(`../assets/img/${props.imgName}`)}
      />
    );
}

export default Banner;
{/* <View>
<Text style={styles.texts}>{props.title}</Text>
<Text>{props.subtitle}</Text>
</View> */}