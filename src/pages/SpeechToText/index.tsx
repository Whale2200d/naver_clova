import React, { useEffect, useState } from 'react';

const SpeechToText: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (isListening) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      console.log('recognition: ', recognition);
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        console.log('Listening...');
      };

      recognition.onresult = (event) => {
        const lastResultIndex = event.results.length - 1;
        const spokenText = event.results[lastResultIndex][0].transcript;
        console.log(spokenText);
        setTranscript(spokenText);
      };

      recognition.start();

      return () => {
        recognition.onend = () => {
          console.log('Recognition Ended.');
        };
        recognition.stop();
      };
    }
  }, [isListening]);

  const toggleListening = () => {
    setIsListening(!isListening);
  };
  return (
    <>
      <button onClick={toggleListening}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <p>{transcript}</p>
    </>
  );
};

export default SpeechToText;
