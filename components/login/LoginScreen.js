import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native-paper';
import { useNavigate } from 'react-router-native';

import { styles } from '../../stylesheets/login/loginStyles';

export const LoginScreen = () => {

  const navigate = useNavigate();

  const onPressLogin = () => {
    navigate('/oati')
  }

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.logoArea }>
        <Text style={ styles.bigText }>
          OATI
        </Text>

        <Text style={ styles.smallText }>
          Oficina de Apoyo Técnico Informático
        </Text>
      </View>

      <View style={ styles.bodyArea }>
          <TextInput
            mode='outlined'
            label='Usuario'
          />

          <TextInput
            style={ styles.input }
            mode='outlined'
            label='Contraseña'
            secureTextEntry={ true }
          />

          <Button 
            style={ styles.button }
            mode='contained'
            onPress={ onPressLogin }
          >
            Iniciar Sesión
          </Button>
      </View>
    </SafeAreaView>
  )
}