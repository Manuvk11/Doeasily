import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Ionicons';
import Icon6 from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import dummyData from './dummy';

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [Pressed, setPressed] = useState(false);

  const handlePressed = () => {
    setIsPressed(!isPressed);
  };

  const handlePress = () => {
    setIsPress(!isPress);
  };

  const Pressedbtn = () => {
    setPressed(!Pressed);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const Search = text => {
    setSearchQuery(text);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const filteredData = dummyData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.description}>{item.silver}</Text>
          <Text style={styles.description}>{item.gold}</Text>
          <Text style={styles.description}>{item.amount}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.description, {color: 'red'}]}>
            {item.goldweight}
          </Text>
          <Text style={[styles.description, {color: 'green'}]}>
            {item.silverweight}
          </Text>
          <Text style={[styles.description, {color: 'green'}]}>
            {item.totalweight}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <Icon5 name="person-circle" color={'steelblue'} size={40} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            color: 'black',
            paddingTop:10,
          }}>
          Mannalal Manaklal
        </Text>

      </View>

    <View style={{flexDirection: 'row',borderWidth:0.5,alignItems:'center',height:40,margin:5,padding:5,justifyContent:'center',borderRadius:5}}>
    <Icon6 name="search" size={20} color="#999" style={styles.searchIcon} />
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor={'black'}
        value={searchQuery}
        onChangeText={Search}
      />
    </View>

      <View style={{flexDirection: 'row'}} >
        <Text style={[{
            fontSize: 15,
          
            marginBottom: 10,
            color: 'steelblue',
      borderColor:'grey',
      borderWidth:1,
      padding:2,
      paddingHorizontal:10,
      borderRadius:10,
      marginLeft:5,
      
          },isPressed && styles.textPressed]} onPress={handlePressed} >Both</Text>
        <Text style={[{
            fontSize: 15,
          
            marginBottom: 10,
            color: 'steelblue',
      borderColor:'grey',
      borderWidth:1,
      padding:2,
      paddingHorizontal:10,
      borderRadius:10,
      marginLeft:5,
      
          },isPress && styles.textPressed]} onPress={handlePress}>Gold</Text>
        <Text style={[{
            fontSize: 15,
          
            marginBottom: 10,
            color: 'steelblue',
      borderColor:'grey',
      borderWidth:1,
      padding:2,
      paddingHorizontal:10,
      borderRadius:10,
      marginLeft:5,
      
          },Pressed && styles.textPressed]} onPress={Pressedbtn}>Silver</Text>
      </View>

      <View>
        <FlatList
          data={dummyData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.popup}>
          <View style={{marginTop: 10}}>
            <Icon2
              onPress={() => toggleModal()}
              style={{
                color: 'steelblue',
                marginLeft: 30,
                backgroundColor: 'aliceblue',
                padding: 8,
                borderRadius: 30,
                width: 50,
              }}
              name="account-multiple-plus"
              size={30}
            />
            <Text style={{color: 'grey', marginLeft: 20, fontSize: 15}}>
              Add Third Party
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Icon3
                onPress={() => toggleModal()}
                style={{
                  color: 'steelblue',
                  marginLeft: 30,
                  backgroundColor: 'aliceblue',
                  padding: 8,
                  borderRadius: 30,
                  width: 50,
                }}
                name="swap-horizontal-sharp"
                size={30}
              />
              <Text style={{color: 'grey', marginLeft: 25, fontSize: 15}}>
                Transactions
              </Text>
            </View>

            <View style={{flexDirection: 'column'}}>
              <Icon3
                onPress={() => toggleModal()}
                style={{
                  color: 'steelblue',
                  backgroundColor: 'aliceblue',
                  padding: 8,
                  borderRadius: 30,
                }}
                name="swap-horizontal-sharp"
                size={30}
              />
              <Text style={{color: 'grey', marginLeft: 8, fontSize: 15}}>
                Metal
              </Text>
            </View>

            <View style={{flexDirection: 'column'}}>
              <FontAwesome5
                onPress={() => toggleModal()}
                style={{
                  color: 'steelblue',
                  backgroundColor: 'aliceblue',
                  padding: 8,
                  borderRadius: 30,
                }}
                name={'money-bill'}
                size={30}
              />
              <Text style={{color: 'grey', marginLeft: 15, fontSize: 15}}>
                Cash
              </Text>
            </View>

            <View style={{flexDirection: 'column'}}>
              <Icon4
                onPress={() => toggleModal()}
                style={{
                  color: 'steelblue',
                  backgroundColor: 'aliceblue',
                  padding: 10,
                  borderRadius: 30,
                  marginRight: 20,
                }}
                name="gold"
                size={30}
              />
              <Text style={{color: 'grey', marginLeft: 8, fontSize: 15}}>
                Bhavcut
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => { toggleModal(); handleToggle() }} style={styles.iconButton}>

       
          <Icon1
            style={styles.icon}
            name="add"
            size={40}
            color="white"
          />
        
      </TouchableOpacity>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  popup: {
    backgroundColor: 'white',
    flex: 1,
    alignContent: 'center',
    // alignItems:'center',
    marginTop: '120%',
    marginBottom: '40%',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    borderWidth:1,
    borderColor:'lightgrey'
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    color: 'black',
    borderWidth:4,
    borderColor:'lightgray'
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
  searchBar: {
    backgroundColor: 'white',
   flex:1,
    paddingLeft: 10,
    alignItems:'center',
  height:'135%',
  width:'125%',
  
    color: 'black',
  },
  iconButton: {
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    borderRadius:50,
    width: 60,
    marginLeft:300,
    marginTop: '185%',
    position: 'absolute',
    height:40
  },
  icon: {
    paddingHorizontal:10 ,
    
  },
  textPressed: {
    backgroundColor: 'steelblue',
    color: 'white',
  },
});
