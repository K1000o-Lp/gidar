import { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Dialog, Portal, Text, TextInput } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import { createorder } from '../../actions';
import { useGetOcurrences } from '../../hooks/useGetOcurrences';

export const CreateOrderScreen = () => {

  const [showDropDown, setShowDropDown] = useState(false);
  const [visible, setVisible] = useState(false);
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const [ocurrence, setOcurrence] = useState('');
  const ocurrencesList = useGetOcurrences();

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  const createorderState = useSelector(state => state.createorder);

  const { user } = authState;
  const { success, loading } = createorderState;

  const showDialog = () => {
    setVisible(true);
  }

  const hideDialog = () => {
    setVisible(false);
  }

  const handleReport = () => {

    if (issue.trim().length && description.trim().length > 2 && ocurrence) {
      dispatch(
        createorder({
          id_usuario: user.id,
          id_dependencia: user.idDependency,
          id_tipo_caso: ocurrence,
          asunto: issue,
          descripcion_breve: description,
        })
      );

      setIssue('');
      setDescription('');
      setOcurrence('');
    }
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
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

  return (
    <>
      <View
        style={{
          paddingHorizontal: 35,
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <View>
          <View style={{
            alignItems: 'center',
          }}
          >
            <Text
              variant='headlineSmall'
            >
              Por favor, indique su caso
            </Text>
          </View>

          <ScrollView>
            <View
              style={{
                marginTop: 35
              }}
            >
              <TextInput
                mode='outlined'
                label='Asunto'
                style={{
                  marginBottom: 20,
                }}
                onChangeText={setIssue}
                value={issue}
              />

              <DropDown
                mode='outlined'
                label='Tipo de Caso'
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={ocurrence}
                setValue={setOcurrence}
                list={ocurrencesList}
                dropDownContainerHeight={125}
              />

              <TextInput
                mode='outlined'
                label='Breve Descripción'
                style={{
                  marginTop: 20,
                }}
                multiline
                onChangeText={setDescription}
                value={description}
              />

              <Button
                style={{
                  marginTop: 20,
                  borderRadius: 6,
                }}
                mode='contained'
                onPress={handleReport}
                loading={loading}
                disabled={loading}
              >
                Reportar
              </Button>

              <Button
                style={{
                  marginTop: 20,
                  borderRadius: 6,
                }}
                mode='contained'
                onPress={async () => {
                  await schedulePushNotification();
                }}
              >
                Notificame
              </Button>

              {/* <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.Icon icon="checkbox-marked-circle" />
                  <Dialog.Title style={{ textAlign: 'center' }}>{success?.title}</Dialog.Title>
                  <Dialog.Content>
                    <Text variant="bodyMedium">
                      {success?.message}
                    </Text>
                  </Dialog.Content>
                </Dialog>
              </Portal> */}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  )
}

async function schedulePushNotification() {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Conseguiste una notificacion de prueba 📬",
        body: 'Este es el cuerpo',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  } catch (error) {
    console.error("Error al programar la notificación", error);
  }
}

async function registerForPushNotificationsAsync() {
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