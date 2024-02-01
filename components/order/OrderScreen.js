import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { ActivityIndicator, Button, Text, useTheme } from 'react-native-paper';

import { ToggleProcess } from './ToggleProcess';
import { ToggleFinish } from './ToggleFinish';
import { useGetOrderById } from '../../hooks/useGetOrderById';
import { socket } from '../../config';

export const OrderScreen = () => {

  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const authState = useSelector(state => state.auth);

  const { rol } = authState.user;
  const { orderId } = route.params;

  const { data: order, loading } = useGetOrderById(orderId);

  const {
    person,
    issue,
    dependency,
    status,
    description,
    responsable,
  } = order;

  const goMessages = () => {
    navigation.navigate('Chat', {
      orderId,
    });
  }

  useEffect(() => {
    socket.on('settedOrderInProgress', () => {
      navigation.replace('Detail', {
        orderId,
      });
    });
  }, []);

  useEffect(() => {
    socket.on('settedOrderFinished', () => {
      navigation.replace('Detail', {
        orderId,
      });
    });
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <>
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView>
          <View
            style={{
              marginTop: 15,
              marginHorizontal: 20,
            }}
          >
            <Text
              variant='titleLarge'
              style={{
                fontWeight: 'bold',
              }}
            >
              {issue}
            </Text>

            <Text
              variant='labelLarge'
              style={{
                marginTop: 5,
              }}
            >
              {person} - {dependency}
            </Text>

            <Text
              variant='bodyMedium'
              style={{
                marginTop: 20,
              }}
            >
              {description}
            </Text>

            {
              rol != 'default' && status === 'Pendiente'
              && (
                <ToggleProcess orderId={orderId} />
              )
            }

            {
              rol != 'default' && status === 'En Proceso'
              && (
                <ToggleFinish orderId={orderId} />
              )
            }

            {
              status === 'En Proceso'
              && (
                <Button
                  mode='elevated'
                  icon='android-messages'
                  contentStyle={{
                    flexDirection: 'row-reverse'
                  }}
                  style={{
                    marginTop: 10,
                    borderRadius: 6,
                  }}
                  onPress={goMessages}
                >
                  Mensajes
                </Button>
              )
            }

            {
              status != 'Finalizado'
              && (
                <Button
                  mode='contained'
                  buttonColor={theme.colors.error}
                  style={{
                    marginTop: 10,
                    borderRadius: 6,
                  }}
                >
                  Cancelar Orden
                </Button>
              )
            }
          </View>

        </ScrollView>
      </View>
    </>
  )
}
