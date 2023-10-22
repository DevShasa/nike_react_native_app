import { StyleSheet, View, Image, FlatList, useWindowDimensions, Text, ScrollView, Pressable } from "react-native";
import products from "../data/products";

const ProductDetailsScreen = ()=>{
    const {width} = useWindowDimensions()
    const product = products[0]

    const addToCart = ()=>{
        console.log("Budaaaa")
    }

    return(
        <View>
            <ScrollView>
                <FlatList 
                    data={product.images}
                    renderItem={(item)=>(
                        <Image source={{uri:item.item}} style={{
                            width,
                            aspectRatio:1
                        }}/>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />
                {/* title */}
                <View style={{padding:20}}>
                    <Text style={styles.title}>{product.name}</Text>
                    {/* price */}
                    <Text style={styles.price}>{product.price}</Text>
                    {/* Description */}
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>
            {/* image carousel */}
            <Pressable onPress={addToCart} style={styles.button}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>
            {/* Add to cart button */}
            {/* Navigation Icon */}
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        fontSize: 34,
        fontWeight: '500',
        marginVertical:10
    },
    price:{
        fontWeight:"500",
        fontSize: 16
    },
    description:{
        marginVertical:10,
        fontSize: 18,
        lineHeight:20,
        fontWeight:'300'
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

export default ProductDetailsScreen