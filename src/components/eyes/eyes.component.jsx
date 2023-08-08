import { startObserving } from '../../utils/eyes/eyes.utils';
import { useEffect } from 'react';

import { LeftEye, RightEye, Pupil } from './eyes.styles.jsx';

const Eyes = () => {
  useEffect(() => {
    startObserving();
  }, []);
  return (
    <>
      <LeftEye>
        <Pupil />
      </LeftEye>

      <RightEye>
        <Pupil />
      </RightEye>
    </>
  );
};

export default Eyes;
