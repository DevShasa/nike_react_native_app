import  {FlatList, View, Image, StyleSheet, Pressable} from "react-native"
import products from "../data/products"

const ProductScreen = ({navigation}) =>{

    const imagePressed = (item) =>{
        navigation.navigate('Product Detail')
    }

    return(
        <FlatList
            numColumns={2}
            data={products}
            renderItem={({item})=>(
                <Pressable style={styles.imageContainer} onPress={()=>imagePressed(item)}>
                    <Image
                        source={{uri: item.image}}
                        style={styles.image}
                    />
                </Pressable>
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