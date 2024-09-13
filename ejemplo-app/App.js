import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

function PantallaA1({ navigation }) {
  const [nombre, setNombre] = React.useState('');
  const [telefono, setTelefono] = React.useState('');

  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.texto}>Pantalla A1</Text>
      <TextInput
        style={estilos.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={estilos.input}
        placeholder="Teléfono"
        keyboardType="phone-pad"
        value={telefono}
        onChangeText={setTelefono}
      />
      <Button
        title="Ir a A2"
        onPress={() => navigation.navigate('PantallaA2', { nombre, telefono })}
      />
    </View>
  );
}

function PantallaA2({ route }) {
  const { nombre, telefono } = route.params;

  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.texto}>Pantalla A2</Text>
      <Text style={estilos.texto}>Nombre: {nombre}</Text>
      <Text style={estilos.texto}>Teléfono: {telefono}</Text>
    </View>
  );
}

function PantallaB1({ navigation }) {
  return (
    <View style={estilos.pantallaAlt}>
      <Text style={estilos.texto}>Pantalla B1</Text>
      <Button
        title="Ir a B2"
        onPress={() => navigation.navigate('PantallaB2')}
      />
    </View>
  );
}

function PantallaB2() {
  return (
    <View style={estilos.pantallaAlt}>
      <Text style={estilos.texto}>Pantalla B2</Text>
    </View>
  );
}

function PantallaC1({ navigation }) {
  return (
    <View style={estilos.pantallaAlt2}>
      <Text style={estilos.texto}>Pantalla C1</Text>
      <Button
        title="Ir a C2"
        onPress={() => navigation.navigate('PantallaC2')}
      />
    </View>
  );
}

function PantallaC2() {
  return (
    <View style={estilos.pantallaAlt2}>
      <Text style={estilos.texto}>Pantalla C2</Text>
    </View>
  );
}

function PantallaD1({ navigation }) {
  const [textoDivertido, setTextoDivertido] = React.useState('Che, no pasa nada acá...');

  const cambiarTexto = () => {
    const frases = [
      'Posta, ¿por qué apretás esto? 🤔',
      'Posta, ¿por qué apretás esto? 🤔',
      'Posta, ¿por qué apretás esto? 🤔',
      'Posta, ¿por qué apretás esto? 🤔',
      'Viste, no paso nada 😂',
    ];
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    setTextoDivertido(fraseAleatoria);
  };

  return (
    <View style={estilos.pantallaArg}>
      <Text style={estilos.texto}>{textoDivertido}</Text>
      <Button title="Apretá para ver qué pasa..." onPress={cambiarTexto} />
      <Button title="Ir a D2" onPress={() => navigation.navigate('PantallaD2')} />
    </View>
  );
}

function PantallaD2() {
  return (
    <View style={estilos.pantallaArg}>
      <Text style={estilos.texto}>Pantalla D2</Text>
      <Text style={estilos.texto}>
        Acá tampoco hay mucho que ver... pero al menos llegaste 😜
      </Text>
    </View>
  );
}

const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();

function StackANavegador() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="PantallaA1" component={PantallaA1} />
      <StackA.Screen name="PantallaA2" component={PantallaA2} />
    </StackA.Navigator>
  );
}

function StackBNavegador() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="PantallaB1" component={PantallaB1} />
      <StackB.Screen name="PantallaB2" component={PantallaB2} />
    </StackB.Navigator>
  );
}

function StackCNavegador() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="PantallaC1" component={PantallaC1} />
      <StackC.Screen name="PantallaC2" component={PantallaC2} />
    </StackC.Navigator>
  );
}

function StackDNavegador() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="PantallaD1" component={PantallaD1} />
      <StackD.Screen name="PantallaD2" component={PantallaD2} />
    </StackD.Navigator>
  );
}

const Pestañas = createBottomTabNavigator();

function MisPestañas() {
  return (
    <Pestañas.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icono;

          if (route.name === 'Inicio') {
            icono = 'home';
          } else if (route.name === 'Buscador') {
            icono = 'search';
          } else if (route.name === 'Perfil') {
            icono = 'person';
          } else if (route.name === 'Diversión') {
            icono = 'happy';
          }

          return <Ionicons name={icono} size={size} color={color} />;
        },
      })}
    >
      <Pestañas.Screen name="Inicio" component={StackANavegador} />
      <Pestañas.Screen name="Buscador" component={StackBNavegador} />
      <Pestañas.Screen name="Perfil" component={StackCNavegador} />
      <Pestañas.Screen name="Diversión" component={StackDNavegador} />
    </Pestañas.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MisPestañas />
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  pantallaAlt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB6C1',
  },
  pantallaAlt2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98FB98',
  },
  pantallaArg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
  },
  texto: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 8,
  },
});
