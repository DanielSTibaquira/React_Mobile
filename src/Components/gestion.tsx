import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Interfaz para definir la estructura de los elementos de datos
interface ConsultaData {
  UserName: string;
  CountryName: string;
  Saldo: number;
  NombreAccion: string;
  ValueInDollars: number;
  NombreMoneda: string;
  NombreBroker: string;
  NombreGestora: string;
}

// Datos de ejemplo
const datosConsulta: ConsultaData[] = [
  {
    UserName: "usuario1",
    CountryName: "País1",
    Saldo: 1000.50,
    NombreAccion: "Accion1",
    ValueInDollars: 50.25,
    NombreMoneda: "Dólar",
    NombreBroker: "Broker1",
    NombreGestora: "Gestora1"
  },
  {
    UserName: "usuario2",
    CountryName: "País2",
    Saldo: 2000.75,
    NombreAccion: "Accion2",
    ValueInDollars: 75.60,
    NombreMoneda: "Euro",
    NombreBroker: "Broker2",
    NombreGestora: "Gestora2"
  },
  {
    UserName: "usuario1",
    CountryName: "País1",
    Saldo: 1000.50,
    NombreAccion: "Accion1",
    ValueInDollars: 50.25,
    NombreMoneda: "Dólar",
    NombreBroker: "Broker1",
    NombreGestora: "Gestora1"
  },
  {
    UserName: "usuario2",
    CountryName: "País2",
    Saldo: 2000.75,
    NombreAccion: "Accion2",
    ValueInDollars: 75.60,
    NombreMoneda: "Euro",
    NombreBroker: "Broker2",
    NombreGestora: "Gestora2"
  },
  // Agrega más datos según sea necesario
];

const ConsultasComponent: React.FC = () => {
  const renderItem = ({ item }: { item: ConsultaData }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.label}>Usuario: {item.UserName}</Text>
      <Text style={styles.label}>País: {item.CountryName}</Text>
      <Text style={styles.label}>Saldo: {item.Saldo}</Text>
      <Text style={styles.label}>Acción: {item.NombreAccion}</Text>
      <Text style={styles.label}>Valor en dólares: {item.ValueInDollars}</Text>
      <Text style={styles.label}>Moneda: {item.NombreMoneda}</Text>
      <Text style={styles.label}>Broker: {item.NombreBroker}</Text>
      <Text style={styles.label}>Gestora: {item.NombreGestora}</Text>
    </View>
  );

  return (
    <FlatList
      data={datosConsulta}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ConsultasComponent;