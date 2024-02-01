import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Dialog, Portal, Text, TextInput } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { useDispatch, useSelector } from 'react-redux';

import { createorder } from '../../actions';
import { useGetOcurrences } from '../../hooks/useGetOcurrences';

export const CreateOrderScreen = () => {

  const [showDropDown, setShowDropDown] = useState(false);
  const [visible, setVisible] = useState(false);
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const [ocurrence, setOcurrence] = useState('');
  const ocurrencesList = useGetOcurrences();

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