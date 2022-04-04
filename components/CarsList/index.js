import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from './cars.js'
import CarItem from '../CarItem'

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
            data={cars} 
            renderItem={({item}) => <CarItem car={item}/>}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />  
        </View>
    )
}

export default CarsList;