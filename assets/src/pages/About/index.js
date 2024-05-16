import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, StyleSheet } from 'react-native';

export default function About(){
   return(
      <View style={styles.container}>
         <View style={styles.aboutHeader}>
            <Feather name="check-square" color="black" size={30} />
            <Text style={styles.aboutTitle}>Sobre mim</Text>
         </View>

         <View style={styles.aboutContent}>
            <Text style={styles.textContent}>
               Profissional em transição de
               carreira para o desenvolvimento
               web. Tenho experiência como
               freelancer, aplicando
               habilidades em HTML, CSS, JavaScript, React JS, React
               Native e Node JS. Tenho
               entusiasmo pelo aprendizado
               contínuo e valorizo o trabalho
               em equipe. Busco por
               oportunidades como
               desenvolvedor de sistemas. Em meu histórico empreendedor
               obtive sucesso na expansão de
               um negócio B2C para uma
               fábrica e distribuidora de
               alimentos, B2B. Minhas
               habilidades foram úteis em
               gestão financeira, análise de
               custos e liderança. 
            </Text>

         </View>
      </View>
   )
};

const styles = StyleSheet.create({
   container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
   },
   aboutHeader:{
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      top: 15,
      left: 5,
   },
   aboutTitle:{
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 10,
   },
   aboutContent:{
      alignItems: 'flex-start',
      position: 'absolute',
      top: 75,

   },
   textContent:{
      fontSize: 16,
      lineHeight: 24,
   }
});
