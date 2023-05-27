import { View, Text, FlatList } from "react-native";
import { styles } from '../styles/styles';
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-native-paper";


export default function ListCustomers(){
    const [data, setData] = useState([]);

    const getCustomers = async () => {
        const response = await axios.get(`http://127.0.0.1:3000/api/clientes`)
        setData(response.data)
    } 

    useEffect(()=>{
        getCustomers();
        //console.log(data);
    },[])

    return(
        <View style={styles.container}>
            <Button 
            style={{backgroundColor: 'red',marginLeft:10,marginBottom:10}}
            icon="view-list"
            mode="contained"
            onPress={getCustomers}
            >Listar Clientes 
            </Button>
            <Text>
                Listado de clientes
            </Text>
            <FlatList
                data={data}
                renderItem={({item}) =>
                <Text style={{backgroundColor:'powderblue',borderRadius:10,padding:10,textAlign:'center',marginTop:5}}>
                    {item.nombre} {item.apellidos}
                </Text> }
            />
            
        </View>
    )
}