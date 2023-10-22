import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductScreen from "./screens/ProductScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator(); //

const Navigation = () => {

    // const navigation = useNavigation()

	return (
		<NavigationContainer>
			<Stack.Navigator
                screenOptions={{contentStyle:{backgroundColor:"white"}}}
            >
				<Stack.Screen
					name="Products"
					component={ProductScreen}
					options={({navigation})=>({
						headerRight: () => (
							<Pressable style={{marginRight:10, flexDirection:"row"}} onPress={()=>navigation.navigate("Cart")}>
								<FontAwesome5 name="shopping-cart" size={18} color="gray" />
                                <Text style={{marginLeft:5, fontWeight:"500"}}>1</Text>
							</Pressable>
                        ),
					})}
				/>
				<Stack.Screen
					name="Product Detail"
					component={ProductDetailsScreen}
				/>
				<Stack.Screen
					name="Cart"
					component={ShoppingCart}
					options={{ presentation: "modal" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
