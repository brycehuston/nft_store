
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core';


const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar animated={true} {...props} /> : null;
    <View>
        <Text>FocusedStatusBar</Text>
    </View>
}

export default FocusedStatusBar