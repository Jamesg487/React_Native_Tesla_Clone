import { View, Text, Pressable} from "react-native";
import styles from './styles.js'

const StyledButton = ({type, onPress}) => {

    const backgroundColour = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColour = type === 'primary' ? '#FFFFFF' : '#171A20';
    const textContent = type === 'primary' ? 'Custom Order' : 'Existing Inventory';

    return ( 
        <View style={styles.container}>
        <Pressable style={[styles.button, {backgroundColor: backgroundColour}]} onPress={() => onPress()}>
            <Text style={[styles.text, {color: textColour}]}>{textContent}</Text>
        </Pressable>

        </View>
     );
}

export default StyledButton;