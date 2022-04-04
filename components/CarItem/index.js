import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from './styles.js'

const CarItem = ({car}) => {
    return ( 
        <View style={styles.carContainer}>
        <ImageBackground 
            source={car.image} 
            style={styles.image}
          />
    
          <View style={styles.titles}>
            <Text style={styles.title}>{car.name}</Text>
            <Text style={styles.subtitle}>
              {car.tagline}
              {" "}
              <Text style={styles.taglineCTA}>
                {car.taglineCTA}
              </Text>
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <StyledButton type="primary" onPress={() => {console.warn("primary button pressed")}}/>
            <StyledButton type="secondary" onPress={() => {console.warn("secondary button pressed")}}/>
          </View>
        </View>
     );
}

export default CarItem;