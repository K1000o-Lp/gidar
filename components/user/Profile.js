import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Text, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/authActions';

export const Profile = () => {

  const authState = useSelector(state => state.auth);
  const theme = useTheme();
  const dispatch = useDispatch();

  const { firstName, lastName } = authState.user;

  const onPressing = () => {
    dispatch(logout());
  }

  return (
    <>
      <View
        style={{
          margin: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <Avatar.Icon size={300} icon='account' />

        <Text
          variant='displayMedium'
          style={{
            color: theme.colors.primary,
          }}
        >
          {`${lastName} ${firstName}`}
        </Text>
      </View>

      <View
        style={{
          margin: 20,
          flex: 1,
          justifyContent: 'flex-end'
        }}
      >
        <Button
          mode='elevated'
          style={{
            marginTop: 20,
            borderRadius: 6,
          }}
          contentStyle={{
            flexDirection: 'row-reverse',
          }}
          icon='logout'
          onPress={onPressing}
        >
          Cerrar Sesión
        </Button>
      </View>
    </>
  )
}
