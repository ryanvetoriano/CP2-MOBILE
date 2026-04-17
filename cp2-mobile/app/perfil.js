import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function carregar() {
      const dados = await AsyncStorage.getItem('usuario');

      if (dados) {
        setUsuario(JSON.parse(dados));
      }
    }

    carregar();
  }, []);

  const editar = () => {
  Alert.alert(
    'Editar dados',
    'Deseja editar suas informações?',
    [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Editar',
        onPress: () => {
          router.replace('/');
        },
      },
    ]
  );
};

  const excluir = () => {
    Alert.alert(
      'Confirmar',
      'Deseja excluir seus dados?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.removeItem('usuario');
            setUsuario(null);
            router.replace('/');
          },
        },
      ]
    );
  };

  if (!usuario) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/ryan.png')}
          style={styles.image}
        />

        <Text style={styles.nome}>{usuario.nome}</Text>

        <Text style={styles.info}>RM: {usuario.rm}</Text>
        <Text style={styles.info}>CPF: {usuario.cpf}</Text>
        <Text style={styles.info}>Telefone: {usuario.telefone}</Text>

        <TouchableOpacity style={styles.buttonEdit} onPress={editar}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonDelete} onPress={excluir}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0FFFF',
  },
  card: {
    backgroundColor: '#B0E0E6',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    width: '80%',
    elevation: 5,
  },
  image: {
    width: 200,
    height: 160,
    borderRadius: 20,
    marginBottom: 15,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonEdit: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonDelete: {
    backgroundColor: '#FF3B30',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});