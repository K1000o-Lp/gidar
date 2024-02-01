import { useEffect, useRef, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import { UiDefault } from './user-routes/default/UiDefault';
import { UiOati } from './user-routes/oati/UiOati';

import { socket } from '../config';

export const RolesNavigation = () => {

  const authState = useSelector(state => state.auth);
  console.log(authState);
  const { user } = authState;
  const theme = useTheme();
  const Stack = createNativeStackNavigator();

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const RenderByRole = () => {
    switch (user?.rol) {
      case 'oati':
        return (
          <Stack.Screen name='Oati' component={UiOati} />
        );

      case 'director':
        return (
          <Stack.Screen name='Director' component={LayoutDirector} />
        );

      default:
        return (
          <Stack.Screen name='Default' component={UiDefault} />
        );
    }
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    socket.on('notification', async (content) => {
      await schedulePushNotification(content);
    });

    return () => {
      socket.disconnect();
    }
  }, []);

  useEffect(() => {
    socket.on('message', async (messages, orderId) => {
      await schedulePushNotification({
        title: 'Nuevo Mensaje',
        body: `Has recibido un nuevo mensaje de la orden N° ${orderId}.`,
        data: {
          url: `Chat?orderId=${orderId}`,
        },
      });
    });

    return () => {
      socket.disconnect();
    }
  }, []);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.primary}
        barStyle='light-content'
        showHideTransition='fade'
      />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {
          RenderByRole()
        }
      </Stack.Navigator>
    </>

  )
}

const schedulePushNotification = async ({ title, body, data }) => {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data,
      },
      trigger: null,
    });
  } catch (error) {
    console.error("Error al programar la notificación", error);
  }
}

const registerForPushNotificationsAsync = async () => {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();

    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      throw new Error('Permiso de notificacion no concedido');
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (await Notifications.getExpoPushTokenAsync({ projectId: '834135fa-1e63-46f3-9be5-81ac2305766f' })).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
