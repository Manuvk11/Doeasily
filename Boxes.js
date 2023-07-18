import * as React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
const Boxscreen=()=>{
    return(
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black',fontSize:30}} >
               This is the Box screen
            </Text>
        </View>
    )
}
export default Boxscreen;