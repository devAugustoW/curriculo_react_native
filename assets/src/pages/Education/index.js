import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { View, Text, StyleSheet } from 'react-native';

export default function Education(){
   return(
      <View style={styles.container}>
         <View style={styles.educationHeader}>
            <Feather name="book-open" color="#000" size={30} />
            <Text style={styles.educationTitle}>Educação</Text>
         </View>

         <View style={styles.educationContent}>
            <Text style={styles.titleContent}>FACULDADE SENAC</Text>
            <Text style={styles.textContent}>Análise e Desenvolvimento de Sistemas</Text>

            <Text style={styles.titleContent}>FACULDADE ESM</Text>
            <Text style={styles.textContent}>Admistração</Text>

         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container:{
      marginLeft: 10,
      marginTop: 15,
   },
   educationHeader:{
      flexDirection: 'row',
      alignItems: 'center',
   },
   educationTitle:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingBottom: 5,
      marginLeft:10,
      
   },
   educationContent:{
      marginTop: 25,
   },
   titleContent:{
      fontSize: 18,
      marginBottom: 5,
   },
   textContent:{
      fontSize: 16,
      marginBottom: 30,
   }

})
