import React, {useState, useEffect} from "react";
import { render } from "react-dom";
import { View ,Text, StyleSheet, TouchableOpacity, FlatList, Image} from "react-native";
import {itemID, item} from "../mataData/products"

const ProductList = ({name, image, description, onPress}) =>{
    return(
        <View style={styles.productsItem}>

            <TouchableOpacity  onPress ={onPress}>
                    <View style={styles.imageView}>
                    <Image/>
                    </View >
                    
                    <View style={styles.price}>
                        <Text>{name}</Text>
                        <Text>{description}</Text>
                    </View>
                </TouchableOpacity>
        </View>

    );
}

export const FinalList =({navigation}) =>{

    const renderList=({item})=>{
        return(
            <ProductList name={item.name} image={item.image} description={item.description} onPress={() => navigation.navigate("Home",{productId: item.id})}/>
        )
    }

        const [list, setList] = useState([])
        useEffect(()=>{
            setList(item())
        })
        return(
            
            <FlatList
            renderItem={renderList}
            data={list}

            />
        )
}
const styles = StyleSheet.create({
    imageView:{
        height: 250,
        backgroundColor: "#0033FF",
        borderRadius: 20,
        marginHorizontal: 10,
        marginTop: 10
        
    },
    description: {
        height: "25",

    },
    productsItem:{
        height: 450,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginHorizontal:5
    },
    price:{
        marginTop: 30,
        marginHorizontal: 20
    }


})