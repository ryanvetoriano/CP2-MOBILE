import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaskedTextInput } from 'react-native-mask-text';

export default function Index() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [rm, setRm] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    async function carregarDados() {
      const dados = await AsyncStorage.getItem('usuario');

      if (dados) {
        const usuario = JSON.parse(dados);

        setNome(usuario.nome);
        setRm(usuario.rm);
        setCpf(usuario.cpf);
        setTelefone(usuario.telefone);
      } else {
        // 🔥 limpa se não tiver dados
        setNome('');
        setRm('');
        setCpf('');
        setTelefone('');
      }
    }

    carregarDados();
  }, []);

  const salvar = async () => {
    const nomeLimpo = nome.trim();
    const cpfNumeros = cpf.replace(/\D/g, '');
    const telefoneNumeros = telefone.replace(/\D/g, '');

    if (!nomeLimpo || !rm || !cpf || !telefone) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (nomeLimpo.length < 8) {
      Alert.alert('Erro', 'O nome deve ter no mínimo 8 caracteres.');
      return;
    }

    if (rm.length !== 6) {
      Alert.alert('Erro', 'O RM deve ter exatamente 6 dígitos.');
      return;
    }

    if (cpfNumeros.length !== 11) {
      Alert.alert('Erro', 'CPF inválido.');
      return;
    }

    if (telefoneNumeros.length !== 11) {
      Alert.alert('Erro', 'Telefone inválido.');
      return;
    }

    const usuario = {
      nome: nomeLimpo,
      rm,
      cpf,
      telefone,
    };

    await AsyncStorage.setItem('usuario', JSON.stringify(usuario));

    router.replace('/perfil');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <Text style={styles.subtitle}>
        {nome ? 'Edite seus dados' : 'Preencha seus dados'}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) =>
          setNome(text.charAt(0).toUpperCase() + text.slice(1))
        }
      />

      <TextInput
        style={styles.input}
        placeholder="RM"
        value={rm}
        onChangeText={(text) => setRm(text.replace(/[^0-9]/g, ''))}
      />

      <MaskedTextInput
        style={styles.input}
        mask="999.999.999-99"
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />

      <MaskedTextInput
        style={styles.input}
        mask="(99) 99999-9999"
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E0FFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  input: {
    backgroundColor: '#B0E0E6',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});