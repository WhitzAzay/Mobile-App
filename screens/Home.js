import React, {useState, useEffect} from "react";
import { View ,Text, StyleSheet, TouchableOpacity} from "react-native";
import {itemID, item} from "../mataData/products"

 export default function Product({route, navigation}) {
    const [items, setItems] = useState({})
    const{productId} = route.params

    useEffect(()=>{
        setItems(itemID(productId))
    })
    return(
        <View style={{flex: 1, justifyContent: "space-evenly"}}>
            <View style={styles.imageView}>

            </View>
            <View style={styles.price}>
                <Text>{items.description}</Text>
                <Text>{items.description}</Text>
            </View>
            <View style={styles.colors}>
                <TouchableOpacity style={styles.colors1}>

                </TouchableOpacity>
                <TouchableOpacity style={styles.colors2}>

                </TouchableOpacity>

                <TouchableOpacity style={styles.colors3}>

                </TouchableOpacity>
                <TouchableOpacity style={styles.colors4}>

                </TouchableOpacity>


            </View>
            <View style ={{marginLeft: 20, height: "10%"}}>
                <TouchableOpacity style={styles.cartBtn}>
                    <Text style={{color: "#fff", fontWeight: "bold"}}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
}
const styles = StyleSheet.create({
    imageView:{
        height: "60%",
        backgroundColor: "#0033FF",
        borderRadius: 20,
        marginHorizontal: 10
    },
    description: {
        height: "25",

    },
    colors: {
        flexDirection: "row",
        margin: 20
    },
    colors1:{
        backgroundColor: "#0033FF",
        height: 40,
        width:40,
        borderRadius: 5,
        margin: 10
    },
    colors2:{
        backgroundColor: "#13C900",
        height: 40,
        width:40,
        margin: 10,
        borderRadius: 5
    },
    colors3:{
        backgroundColor: "#FF0000",
        height: 40,
        width:40,
        margin: 10,
        borderRadius: 5
    },
    colors4:{
        backgroundColor: "#FF5200",
        height: 40,
        width:40,
        margin: 10,
        borderRadius: 5
    },
    cartBtn:{
        backgroundColor: "#FC6582",
        height: 55,
        width: "65%",
        borderRadius: 40,
        justifyContent: "center",
        alignItems:"center",


    },
    price: {
        marginHorizontal: 10
    }




})