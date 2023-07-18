import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Home from './home';
import boxscreen from './Boxes';
import Books from './books';
import Moreoptions from './more';
import  Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <View style={{flex:1}}>
  
    <Tab.Navigator initialRouteName='Home'  screenOptions={ ({ route }) => ({
          tabBarIcon: ({ focused, color, size, }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Boxes') {
              iconName = focused ? 'cube' : 'cube-outline';
            } else if (route.name === 'Books') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Book') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'More') {
              iconName = focused ? 'ellipsis-horizontal-circle-sharp' : 'ellipsis-horizontal-outline';
            }

            // You can return any component that you like here!
            return <Icon name = {iconName} size={size} color={color} />;
          },
          tabBarStyle:{height:60,padding:5},
          tabBarActiveTintColor: 'steelblue',
          tabBarInactiveTintColor: 'gray',
          headerShown:false,

         tabBarLabelStyle:{fontSize:18,padding:2}
        })
       }>
      
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Boxes" component={boxscreen} />
      <Tab.Screen name="Book" component={Books} />
      <Tab.Screen name="More" component={Moreoptions} />
      
    </Tab.Navigator>
    
    
   
    </View>
    </NavigationContainer>
   
  );
}




// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './home';
// const Tab = createBottomTabNavigator();

// const App = () =>{
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//     </Tab.Navigator>
//   );
// }
// export default App;