import { ActivityIndicator, Appbar, Text } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import { useGetOrderById } from '../../hooks/useGetOrderById';
import { ToggleProcess } from './ToggleProcess';
import { ToggleFinish } from './ToggleFinish';
import { useNavigation, useRoute } from '@react-navigation/native';

export const OrderScreen = ({ admin = false }) => {

  const route = useRoute();
  const navigation = useNavigation();

  const { orderId } = route.params;

  const { data: order, loading } = useGetOrderById(orderId);

  const goBack = () => {
    navigation.goBack();
  }

  const {
    person,
    issue,
    dependency,
    status,
    description,
  } = order;

  return (
    <>
      <Appbar.Header
        style={{
          paddingTop: 25,
          height: 10,
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}
      >
        <Appbar.Action
          icon='arrow-left'
          onPress={goBack}
        />
      </Appbar.Header>

      <View
        style={{
          marginBottom: 65,
          flex: 1,
          justifyContent: loading ? 'center' : null,
          alignItems: loading ? 'center' : null,
        }}
      >
        {
          loading
            ? (<ActivityIndicator
              animating={true}
              size='large'
            />)
            : (<ScrollView>
              <View
                style={{
                  marginTop: 30,
                  marginHorizontal: 20,
                }}
              >
                <Text
                  variant='headlineLarge'
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  {issue}
                </Text>

                <Text
                  variant='titleLarge'
                  style={{
                    marginTop: 10,
                  }}
                >
                  {person} - {dependency}
                </Text>

                <Text
                  variant='labelLarge'
                  style={{
                    marginTop: 35,
                  }}
                >
                  {description}
                </Text>

                {
                  admin && status === 'Pendiente'
                  && (
                    <ToggleProcess orderId={orderId} />
                  )
                }

                {
                  admin && status === 'En Proceso'
                  && (
                    <ToggleFinish orderId={orderId} />
                  )
                }
              </View>
            </ScrollView>)
        }
      </View>
    </>
  )
}
