import { StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigate } from 'react-router-native';

const BOTTOM_APPBAR_HEIGHT = 65;

export const OatiBottomBar = () => {

  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  const navigate = useNavigate();

  const toPending = () => {
    navigate('pending');
  }

  const toInProcess = () => {
    navigate('in-process');
  }

  const toFinished = () => {
    navigate('finished');
  }

  return (
    <>
      <Appbar
        dark={true}
        style={[
          styles.bottom,
          {
            height: BOTTOM_APPBAR_HEIGHT + bottom,
            backgroundColor: theme.colors.primary,
            justifyContent: 'space-around'
          },
        ]}
        safeAreaInsets={{ bottom }}
      >
        <Appbar.Action icon="view-list" onPress={toPending} />
        <Appbar.Action icon="clock-time-eight" onPress={toInProcess} />
        <Appbar.Action icon="checkbox-marked" onPress={toFinished} />
      </Appbar>
    </>
  )
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});