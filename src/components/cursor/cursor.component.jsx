import { useState } from 'react';

import './cursor.styles.scss';

const Cursor = ({ children }) => {
  const [pointer1Position, setPointer1Position] = useState({ x: 0, y: 0 });
  const [pointer2Position, setPointer2Position] = useState({ x: 0, y: 0 });
  const [isCursorLeft, setIsCursorLeft] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [ishover, setIshover] = useState(false);

  const handleMouseMove = (e) => {
    setIsCursorLeft(false);

    window.requestAnimationFrame(function () {
      const x = e.clientX;
      const y = e.clientY;
      setPointer1Position({ x: x - 7, y: y - 7 });
      setPointer2Position({ x: x - 3, y: y - 3 });
    });
  };
  const handleMouseOver = (e) => {
    if (
      e.target.closest('a') ||
      e.target.closest('button') ||
      e.target.closest('.hoverable')
    ) {
      setIshover(true);
    } else {
      setIshover(false);
    }
  };

  return (
    <div
      className={`cursor-wrapper`}
      onMouseMove={handleMouseMove}
      onMouseOver={handleMouseOver}
      onMouseLeave={() => setIsCursorLeft(true)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
    >
      {children}

      <div
        className={`cursor-container`}
        style={{ opacity: isCursorLeft ? 0 : 1 }}
      >
        <div
          className={`pointer-1 ${ishover ? 'hover' : ''} ${
            isClicked ? 'click' : ''
          }`}
          style={{
            transform: `translate(${pointer1Position.x}px, ${pointer1Position.y}px)`,
          }}
        ></div>
        <div
          className='pointer-2'
          style={{
            transform: `translate(${pointer2Position.x}px, ${pointer2Position.y}px) `,
          }}
        ></div>
        <div
          className='pointer-3'
          style={{
            transform: `translate(${pointer2Position.x}px, ${pointer2Position.y}px) `,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Cursor;
