import Sprite from '../../assets/sprite.svg';

const Icon = ({ id, ...ohter }) => (
  <svg id={id} {...ohter} viewBox='0 0 20 20'>
    <use href={`${Sprite}#${id}`} />
  </svg>
);

export default Icon;
