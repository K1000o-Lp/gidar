import React, { useState } from 'react';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { IconButton, TextInput, useTheme } from 'react-native-paper';
import { locale } from 'dayjs/locale/es-mx';
import { useSelector } from 'react-redux';

export const ChatScreen = () => {

  const [messages, setMessages] = useState([]);
  const theme = useTheme();
  const authState = useSelector(state => state.auth);

  const { user } = authState;

  const onSend = (messages) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: user.id,
        }}
        placeholder='Escribe un mensaje...'
        locale={locale}
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
