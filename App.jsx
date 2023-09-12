import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {styles, myimage} from './assets/styles/styles1'

import Formulario from './Components/formulario';
import Banner from './components/Banner';
import Footer from './components/Footer';

export default function App() {
  
  //STATES
  const [identificacion, setIdentificacion] = useState('');
  const [nombres, setNombres] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [definitiva, setDefinitiva] = useState('')
  const [observacion, setObservacion] = useState('')

let rc
  let test = () =>{
    if (definitiva >=3){
      rc = 'Gana'
    }
    if(definitiva >=2 && definitiva <=2.9){
      rc = 'Habilita'
    }
    if(definitiva < 2){
      rc = 'Pierde'
    }
  }

  let calculate = (operator) =>{
    let mDefinitiva = 0
    let mNota1 = parseFloat(nota1)
    let mNota2 = parseFloat(nota2)
    let mNota3 = parseFloat(setNota3)
    switch (operator){
      case "+":
        mDefinitiva = (mNota1 + mNota2 + mNota3) /3
        break
    }
    setDefinitiva(definitiva) //Actualizando la variable de estado result
  }

  let datos = [
    {
      identificacion: 1,
      nombres: "asd",
      asignatura: "Sf",
      nota1: 4,
      nota2: 3.9,
      nota3: 3,
      definitiva: 4,
      observacion: "Gana"
    }
  ]

  let asd = [
    {
      identificacion: identificacion,
      nombres: nombres,
      asignatura: asignatura,
      nota1: nota1,
      nota2: nota2,
      nota3: nota3,
      definitiva: definitiva,
      observacion: observacion
    }
  ]
  console.log(datos)

  let mImage="Calculadora.png"
  return (
    <View style={styles.container}>
      <Banner imgName={mImage}></Banner>
      <View style={{flex:4, borderWidth:2, borderColor:'black', width:'100%', alignItems:'center', justifyContent:'center'}}>
        
        {/* DATOS */}
    <View style={{flexDirection:'row'}}>
        <TextInput 
          placeholder='Identificación'
          onChangeText={identificacion => setIdentificacion(identificacion)} //Capturamos el valor ingresado
          value={identificacion}
          style={styles.tInputs}
        />

        <TextInput 
          placeholder='Nombre'
          onChangeText={nombres => setNombres(nombres)} //Capturamos el valor ingresado
          value={nombres}
          style={styles.tInputs}
        />

        <TextInput 
          placeholder='Asignatura'
          onChangeText={asignatura => setAsignatura(asignatura)} //Capturamos el valor ingresado
          value={asignatura}
          style={styles.tInputs}
        />
      </View>
      

      {/* NOTAS */}
      <View style={{flexDirection:'row'}}>
        <TextInput 
          placeholder='Momento 1'
          onChangeText={nota1 => setNota1(nota1)} //Capturamos el valor ingresado
          value={nota1}
          style={styles.tInputs}
        />

        <TextInput 
          placeholder='Momento 2'
          onChangeText={nota2 => setNota2(nota2)} //Capturamos el valor ingresado
          value={nota2}
          style={styles.tInputs}
        />

        <TextInput 
          placeholder='Momento 3'
          onChangeText={nota3 => setNota3(nota3)} Capturamos el valor ingresado
          value={nota3}
          style={styles.tInputs}
        />
      </View>

      <TextInput
      disabled
          placeholder='Observacion'
          onChangeText={observacion => setObservacion(observacion)} Capturamos el valor ingresado
          value={observacion}
          style={styles.container}
        />

      <Text>Definitiva</Text>
      <Text>{definitiva}</Text>
       
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button
              icon="multiplication"
              mode="contained"
              onPress={()=>calculate("+")}>
            Calcular
          </Button>


          <Button
              icon="division"
              mode="contained"
              onPonress={() => {datos.push(asd)}}>
            Buscar
          </Button>
        </View>


        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button
              mode="contained"
              onPress={() => {
                setIdentificacion('')
                setNombres('')
                setAsignatura('')
                setNota1('')
                setNota2('')
                setNota3('')
                setObservacion(test)
              }}>
            Limpiar
          </Button>
        </View>

      </View>

        
      

    
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}> 
        <Footer message="Footer"/>
      </View> 
    </View>
  );
}





