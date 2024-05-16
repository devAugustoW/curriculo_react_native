import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { View, Text, StyleSheet } from 'react-native';

export default function Experience(){
   return(
      <View style={styles.container}>
         <View style={styles.experienceHeader}>
            <Feather name="briefcase" color="#000" size={30} />
            <Text style={styles.experienceTitle}>Experiência Profissional</Text>
         </View>

         <View style={styles.experienceContent}>
            <Text style={styles.contentTitle}>Freelancer</Text>
            <Text style={styles.contentText}>Desenvolvedor Frontend</Text>

            <Text style={styles.contentTitle}>Dom Berry Açaí</Text>
            <Text style={styles.contentText}>Financeiro</Text>

            <Text style={styles.contentTitle}>Dom Berry Açaí</Text>
            <Text style={styles.contentText}>Sócio Adminstrador</Text>

            <Text style={styles.contentTitle}>Estaleiro Atlântico Sul</Text>
            <Text style={styles.lastContentText}>Analista de Medição Contratual Jr.</Text>
            <Text style={styles.lastContentText}>Inspetor da Qualidade</Text>
            <Text style={styles.lastContentText}>Auxiliar da Qualidade</Text>

         </View>
      </View>
   )
};

const styles = StyleSheet.create({
   container:{
      marginLeft: 10,
      marginTop: 15,
   },
   experienceHeader:{
      flexDirection: 'row',
      alignItems: 'center',
   },
   experienceTitle:{
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft:10,
   },
   experienceContent:{
      marginTop: 30
   },
   contentTitle:{
      fontSize: 18,
      fontWeight: 'bold',
      
   },
   contentText:{
      fontSize: 16,
      marginBottom: 30,
   },
   lastContentText:{}
});
