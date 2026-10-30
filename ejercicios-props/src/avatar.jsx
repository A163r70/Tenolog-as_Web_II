import { getImageUrl } from './utils2';

export default function Avatar({person, size}) {
    let imageSize = 's';
    if (size > 90){
        imageSize = 'b';
    }

    <img
      className="avatar"
      src={getImageUrl(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
}