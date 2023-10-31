import { Text, View, TextInput, Button, SafeAreaView } from 'react-native';

import { styles } from '../../stylesheets/login/loginStyles';

export const LoginScreen = () => {
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
          style={ styles.input }
          placeholder='USUARIO'
          textContentType='username'
        />

        <TextInput
          style={ styles.input }
          placeholder='CONTRASEÑA'
          textContentType='password'
        />

        <View
          style={{
            marginTop: 30,
          }}
        >
          <Button
            title='Iniciar Sesión'
            color='#003785'
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
