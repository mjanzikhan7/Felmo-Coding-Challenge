import React, { useEffect, useRef } from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native'
import Routing from './src/navigation/Routing';

console.disableYellowBox = true;
StatusBar.setHidden(false);


const App = () => {
    const navigatorRef = useRef(null);
    const popupRef = useRef(null);
    useEffect(() => {
    }
    )
    return (
        <View
            style={{ flex: 1}}>
            <Routing ref={navigatorRef} />
        </View>
    )

}
export default App