import React, { useState } from 'react';
import { Button, Textarea } from '@mantine/core';
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';
import classes from './WhatsappButton.module.css';

const WhatsappButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=3107686345&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className={classes.whatsappButtonContainer}>
      {!isOpen && (
        <Button className={classes.whatsappButton} onClick={() => setIsOpen(true)}>
          <FaWhatsapp size={36} />
        </Button>
      )}
      {isOpen && (
        <div className={classes.whatsappChatContainer}>
          <div className={classes.whatsappChatHeader}>
            <FaWhatsapp size={24} className={classes.whatsappIcon} />
            <FaTimes size={24} className={classes.closeIcon} onClick={() => setIsOpen(false)} />
          </div>
          <div className={classes.whatsappChatBody}>
            <p>
              hola! Somos <span className={classes.companyName}>Empowering Communities Foundation (ECF)</span>, escríbenos tu mensaje y te responderemos en pocos minutos.
            </p>
            <Textarea
              value={message}
              onChange={(event) => setMessage(event.currentTarget.value)}
              placeholder="Escribe tu mensaje..."
              autosize
              minRows={3}
            />
            <Button className={classes.sendButton} onClick={handleSendMessage}>
              Abrir chat <FaPaperPlane size={16} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappButton;
