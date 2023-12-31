import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, HelperText } from 'react-native-paper';

import { styles } from '../../stylesheets/login/loginStyles';
import { login } from '../../actions';

export const LoginScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleLogin = () => {

    if (username.trim().length && password.trim().length > 2) {
      dispatch(login(username.trim(), password));
    }
  }

  const hasError = () => {
    return authState.error ? true : false;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor='#ffff'
        barStyle='dark-content'
        showHideTransition='fade'
      />

      <View style={styles.logoArea}>
        <Text style={styles.bigText}>
          OATI
        </Text>

        <Text style={styles.smallText}>
          Oficina de Apoyo Técnico Informático
        </Text>
      </View>

      <View style={styles.bodyArea}>
        <TextInput
          mode='outlined'
          label='Usuario'
          onChangeText={setUsername}
          value={username}
          error={hasError()}
        />

        <TextInput
          style={styles.input}
          mode='outlined'
          label='Contraseña'
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          error={hasError()}
        />

        <HelperText type='error' visible={hasError()}>
          {authState.error}
        </HelperText>

        <Button
          style={styles.button}
          mode='contained'
          onPress={handleLogin}
          disabled={authState.loading}
          loading={authState.loading}
        >
          Iniciar Sesión
        </Button>
      </View>
    </SafeAreaView>
  )
}