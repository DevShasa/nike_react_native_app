import  {FlatList, View, Image, StyleSheet} from "react-native"
import products from "../data/products"

const ProductScreen = () =>{
    return(
        <FlatList
            numColumns={2}
            data={products}
            renderItem={({item})=>(
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: item.image}}
                        style={styles.image}
                    />
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width:"50%",
        padding: 1
    },
    image:{
        width:"100%",
        aspectRatio: 1
    }
})

export default ProductScreen