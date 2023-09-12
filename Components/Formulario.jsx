import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

function Formulario(){
  return (
    <>
    {/* DATOS */}
    <View style={{flexDirection:'row'}}>
        <TextInput 
          placeholder='Identificación'
          onChangeText={value1 => setValue1(value1)} //Capturamos el valor ingresado
          value={value1}
          style={styles.tInputs}
        />

        <TextInput 
          placeholder='Nombre'
          onChangeText={value2 => setValue2(value2)} //Capturamos el valor ingresado
          value={value2}
          style={styles.tInputs}
        />

        <TextInput 
          placeholder='Asignatura'
          onChangeText={value2 => setValue2(value2)} //Capturamos el valor ingresado
          value={value2}
          style={styles.tInputs}
        />
      </View>
      

      {/* NOTAS */}
      <View style={{flexDirection:'row'}}>
        <TextInput 
          placeholder='Momento 1'
          onChangeText={value1 => setValue1(value1)} //Capturamos el valor ingresado
          value={value1}
          style={styles.tInputs}
        />

        <TextInput 
          placeholder='Momento 2'
          onChangeText={value2 => setValue2(value2)} //Capturamos el valor ingresado
          value={value2}
          style={styles.tInputs}
        />

        <TextInput 
          placeholder='Momento 3'
          onChangeText={value2 => setValue2(value2)} //Capturamos el valor ingresado
          value={value2}
          style={styles.tInputs}
        />
      </View>

      <Text>Definitiva</Text>
      <Text>{parseFloat(result).toFixed(0)}</Text>
        
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button
              icon="plus"
              mode="contained"
              onPress={()=>calculate("+")}>
            Sumar
          </Button>
         
          <Button
              icon="minus"
              mode="contained"
              onPress={()=>calculate("-")}>
            Restar
          </Button>
        </View>
       
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button
              icon="multiplication"
              mode="contained"
              onPress={()=>calculate("*")}>
            Calcular
          </Button>


          <Button
              icon="division"
              mode="contained"
              onPress={()=>calculate("/")}>
            Buscar
          </Button>
        </View>


        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button
              icon="close-circle-icon"
              mode="contained"
              onPress={() => {
                setValue1('')
                setValue2('')
                setResult('')
              }}>
            Limpiar
          </Button>
        </View>
    </>
  )
}


export default Formulario

        
{/* 
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
          style={{padding:5, borderRadius:2, margintTop:20, backgroundColor:'gray'}}
          >
            <Text>+</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={{padding:5, borderRadius:2, margintTop:20, backgroundColor:'gray'}}
          >
            <Text>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={{padding:5, borderRadius:2, margintTop:20, backgroundColor:'gray'}}
          >
            <Text>*</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={{padding:5, borderRadius:2, margintTop:20, backgroundColor:'gray'}}
          >
            <Text>/</Text>
          </TouchableOpacity>
        </View> */}