import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductScreen from "./screens/ProductScreen";
import ShoppingCart from "./screens/ShoppingCart";
import HeaderCartIcon from "./components/CartIcon";


const Stack = createNativeStackNavigator(); //

const Navigation = () => {

    // const navigation = useNavigation()

	return (
		<NavigationContainer>
			<Stack.Navigator
                screenOptions={{contentStyle:{backgroundColor:"white"}, animation:"slide_from_bottom"}}
            >
				<Stack.Screen
					name="Products"
					component={ProductScreen}
					options={{headerRight: HeaderCartIcon}}
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
