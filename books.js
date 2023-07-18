import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const Books=()=>{
return(
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'black',fontSize:30}}>
        This is Books screen
    </Text>
</View>
)
}
export default Books;