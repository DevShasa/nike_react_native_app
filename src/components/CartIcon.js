import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"


const HeaderCartIcon = ()=>{

    const navigation = useNavigation()

    return(
        <Pressable style={{marginRight:10, flexDirection:"row"}} onPress={()=>navigation.navigate("Cart")}>
            <FontAwesome5 name="shopping-cart" size={18} color="gray" />
            <Text style={{marginLeft:5, fontWeight:"500"}}>1</Text>
        </Pressable>
    )
}

export default HeaderCartIcon