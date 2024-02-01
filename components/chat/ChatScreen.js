import { useCallback, useEffect, useState } from 'react';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { IconButton, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import { socket } from '../../config';

export const ChatScreen = () => {

  const router = useRoute();
  const [messages, setMessages] = useState([]);
  const theme = useTheme();
  const authState = useSelector(state => state.auth);

  const { orderId } = router.params;
  const { user } = authState;

  const onSend = useCallback((messages = []) => {

    socket.emit('message', orderId, messages);

    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, []);

  useEffect(() => {
    socket.on('message', (messages) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      )
    });
  }, []);

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: user.id,
          name: `${user.primer_nombre} ${user.primer_apellido}`,
        }}
        placeholder='Escribe un mensaje...'
        renderSend={(props) => {
          return (
            <Send {...props}>
              <IconButton
                icon='send'
                iconColor={theme.colors.primary}
                size={25}
              />
            </Send>
          )
        }}
      />
    </>
  )
}
