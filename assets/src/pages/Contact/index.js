import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking  } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';




export default function Contact(){
   const handleLink = (url) => {
      Linking.openURL(url);
   };

   return(
      <View style={styles.container}>
         <View style={styles.contactHeader}>
            <Feather name="share-2" color="" size={30} />
            <Text style={styles.headerTitle}>Links de contato</Text>
         </View>

         <View style={styles.contactContent}>
            <View style={styles.contentLinks}>
               <Feather name="map-pin" color="#000" size={15} />
               <Text style={styles.contentText}>Recife, Pernambuco</Text>
            </View>

            <TouchableOpacity 
               style={styles.contentLinks}
               onPress={() => handleLink("https://augustowdantas.vercel.app/")}>
               <Feather name="flag" color="#000" size={15} />
               <Text style={styles.contentText}>Portfólio</Text>
            </TouchableOpacity>

            <TouchableOpacity 
               style={styles.contentLinks}
               onPress={() => handleLink("https://www.linkedin.com/in/augusto-dantas/")}>
               <Feather name="github" color="#000" size={15} />
               <Text style={styles.contentText}>github.com/devAugustoW</Text>
            </TouchableOpacity>

            <TouchableOpacity 
               style={styles.contentLinks}
               onPress={() => hanldeLink("https://www.linkedin.com/in/augusto-dantas")}>
               <Feather name="linkedin" color="#000" size={15} />
               <Text style={styles.contentText}>in/augusto-dantas/</Text>
            </TouchableOpacity>

            <View style={styles.contentLinks}>
               <Feather name="mail" color="#000" size={15} />
               <Text style={styles.contentText}>augustow.dantas@gmail.com</Text>
            </View>

         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container:{
      marginLeft: 10,
      marginTop: 15,
   },
   contactHeader:{
      flexDirection: 'row',
      alignItems: 'center',
   },
   headerTitle:{
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft:10,
   },
   contactContent:{
      marginTop: 20,
      marginLeft: 5,
   },
   contentLinks:{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
   },
   contentText:{
      marginLeft: 10,
   }
})
