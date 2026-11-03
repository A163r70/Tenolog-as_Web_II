import { getImageUrl } from './utils.jsx';

export default function Avatar({ person, size }) {
  let imageSize = 's';
  if (size > 90) {
    imageSize = 'b';
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}