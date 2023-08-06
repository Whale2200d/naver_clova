import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SpeechToText: React.FC = () => {
  const navigate = useNavigate();

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (isListening) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      if (!recognition) {
        alert(
          'speech API를 사용할 수 없는 브라우저입니다. 브라우저를 확인해주세요.'
        );
        navigate('/speechtotext');
      }
      console.log('recognition: ', recognition);
      recognition.lang = 'ko-KR';
      // recognition.lang = 'en-US';

      recognition.onstart = () => {
        console.log('Listening...');
      };

      recognition.onresult = (event) => {
        console.log('event.results: ', event.results);
        const lastResultIndex = event.results.length - 1;
        console.log('lastResultIndex:', lastResultIndex);
        const spokenText = event.results[lastResultIndex][0].transcript;
        console.log('spokenText: ', spokenText);
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
