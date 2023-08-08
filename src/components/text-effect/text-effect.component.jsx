import { useState, useEffect } from 'react';

import { Text } from './text-effect.styles.jsx';

const TextEffect = ({ defaultText = 'Hi, im ishak', isInfinite = true }) => {
  const [text, setText] = useState([]);
  const [isTexting, setIsTexting] = useState(false);
  const textArry = defaultText.split('');
  const textArryReverse = defaultText.split(' ');

  let index = 0;
  let indexReverse = textArryReverse.length;
  let tempText = '';
  let state = true;

  useEffect(() => {
    setTimeout(() => {
      setIsTexting(true);
      const y = setInterval(async function () {
        if (state) {
          tempText += textArry.at(index);
          index++;
          setText(tempText);
        }

        if (index === textArry.length) {
          state = false;
          setIsTexting(false);
          index = 0;
          tempText = '';

          if (!isInfinite) {
            clearInterval(y);
            return;
          }

          setTimeout(() => {
            const x = setInterval(() => {
              indexReverse--;
              tempText = textArryReverse.slice(0, indexReverse).join(' ');
              setText(tempText);

              if (indexReverse === 0) {
                clearInterval(x);
                index = 0;
                tempText = '';
                state = true;
                setIsTexting(true);

                indexReverse = textArryReverse.length;
              }
            }, 10);
          }, 5000);
        }
      }, 40);
    }, 1000);
  }, []);

  return (
    <>
      <Text $isTexting={isTexting}>
        {text}
        <span>|</span>
      </Text>
    </>
  );
};

export default TextEffect;
