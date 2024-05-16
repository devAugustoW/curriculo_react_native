import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home(){
   
   return(
      <View style={styles.container}>
         <Image 
            source={require('../../../images/foto_02.png')}
            style={{ width: 300, height: 500, marginTop: 15 }}
         />
         <Text style={styles.nome}>Augusto Dantas</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
   },
   nome:{
      marginTop: 10,
      fontSize: 20,
   }
 });

