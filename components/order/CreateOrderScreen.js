import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Dialog, Portal, Text, TextInput, useTheme } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { useSelector } from 'react-redux';

import { useGetOcurrences } from '../../hooks/useGetOcurrences';
import { postOcurrence } from '../../helpers/postOcurrence';

export const CreateOrderScreen = () => {

  const [loading, setLoading] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [visible, setVisible] = useState(false);
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const [ocurrence, setOcurrence] = useState('');
  const authState = useSelector((state) => state.auth);
  const ocurrencesList = useGetOcurrences();



  const { user } = authState;

  const showDialog = () => setVisible(true);

  const hideDialog = () => {
    setVisible(false);
  }

  const handleReport = () => {

    if (issue.trim().length && description.trim().length > 2 && ocurrence) {

      setLoading(true);

      postOcurrence(user.id, user.idDependency, ocurrence, issue, description)
        .then((response) => {
          setIssue('');
          setOcurrence('');
          setDescription('');
          showDialog();
        })
        .finally(() => {
          setLoading(false);
        })
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
                multiline
                style={{
                  marginTop: 20,
                }}
                onChangeText={setDescription}
                value={description}
              />

              <Button
                style={{
                  marginTop: 35,
                  borderRadius: 6,
                }}
                mode='contained'
                onPress={handleReport}
                loading={loading}
                disabled={loading}
              >
                Reportar
              </Button>

              <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.Icon icon="checkbox-marked-circle" />
                  <Dialog.Title style={{ textAlign: 'center' }}>Reportado</Dialog.Title>
                  <Dialog.Content>
                    <Text variant="bodyMedium">
                      Tu caso será respondido en breve por la
                      Oficina de Apoyo Técnico Informático
                    </Text>
                  </Dialog.Content>
                </Dialog>
              </Portal>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  )
}