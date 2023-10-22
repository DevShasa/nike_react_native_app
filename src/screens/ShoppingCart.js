import {Text, FlatList, View, StyleSheet, Pressable} from "react-native"
import cart from "../data/cart"
import CartListItem from "../components/CartListItem"


const ShoppingCart = () =>{
    return (
        <>
            <FlatList 
                data={cart}
                renderItem={({item})=>( <CartListItem cartItem={item} />)}
                ListFooterComponent={()=>(
                    <View style={styles.totalsContainer}>
                        <View style={styles.row}>
                            <Text style={styles.text}>Subtotal</Text>
                            <Text>410,00 US$</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Delivery</Text>
                            <Text>10,00 US$</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.textBold}>Total</Text>
                            <Text>420,00 US$</Text>
                        </View>
                    </View>
                )}
            />
            <Pressable  style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>

    )
}


export default ShoppingCart

const styles = StyleSheet.create({
    totalsContainer:{
        margin:20,
        borderColor:"gray",
        borderTopWidth: 1,
        paddingTop: 10,
        borderColor:"gainsboro"
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical: 2
    },
    text:{
        fontSize:16,
        color:"gray"
    },
    textBold:{
        fontSize:16,
        fontWeight:"500"
    },
    button:{
        position: "absolute",
        bottom: 30,
        width:"90%",
        alignSelf:"center",
        padding:20,
        borderRadius: 100,
        backgroundColor:"black",
        alignItems:"center"
    },
    buttonText:{
        color:"white",
        fontWeight:"500",
        fontSize:16,
    }
})