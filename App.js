import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Product from "./components/Product"
import Product_Color from "./components/Product_Color"

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Product" component={Product} />
				<Stack.Screen name="Product_Color" component={Product_Color} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
