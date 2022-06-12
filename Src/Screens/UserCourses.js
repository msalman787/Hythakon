import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import database from '@react-native-firebase/database';
import { useNavigation, StackActions } from '@react-navigation/native';


export default function Todo() {

  const navigation = useNavigation();

  const RegisterCouse = () => {
    navigation.navigate('Register Couse')
  }


  const [list, setList] = useState([]);

  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    database().ref('Forms/WEB').once("value").then(function(snapshot){
   
      console.log(snapshot.val())
      var key = Object.values(snapshot.val()) 
      var userdata =[]
      for(var i=0;i<key.length;i++){
        console.log(key[i])
  
        userdata.push(key[i])
  
      } 
      
      // console.log(userdata)
      // console.log(key);
      setList(userdata);
      // console.log(data)
      console.log(key[0].City);
    })
    // try {
    //   database().ref('Forms/WEB').once("value").then(function (snapshot) {
    //     console.log(snapshot.val()[1])

    //     var userdata = []
        
    //       var getdata = Object.values(snapshot.val())

    //       console.log(getdata)
          
    //     for (var i = 1; i < getdata; i++) {
    //       console.log(snapshot.val()[i])

    //       userdata.push(snapshot.val()[i])

    //     }
    //     setList(userdata);
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  };



  return (

    <View style={styles.container}>
      <StatusBar hidden={true} />

      <ScrollView>
        <View style={styles.cardContainer}>
          <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 'bold' }}>
            Course List
          </Text>

          {list.map((v, i) => {
            console.log(v.City)
            return (

              <View style={styles.card} key={i}>

                <Text>First Name : {v.FNAME}</Text>
                <Text>Last Name : {v.LNAME}</Text>
                <Text>Email : {v.EMAIL}</Text>
                <Text>Contact No : {v.PhoneNo}</Text>
                <Text>City : {v.City}</Text>
                <Text>CourseName : {v.CourseName}</Text>
                <Text>Education : {v.Education}</Text>

              </View>

            )
            
          })}

        </View>
      </ScrollView>

    </View>
  );
}

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    alignItems: 'center',
  },
  inputBox: {
    width: 350,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  cardContainer: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: 320,
    padding: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
  JoinCourse:{
    justifyContent:"flex-end",
    fontSize:17,
    color:'#00c663',
    marginHorizontal:70,
    marginVertical:10,
    fontWeight:"bold"

  }
});