import Avatar from './avatar.jsx';

export default function Profile2() {
  return (
    <div className="profile-container">
      <h2>Ajustar el tamaño de la imagen</h2>
      <Avatar
        size={130}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: 'YfeOqp2'
        }}
      />
    </div>
  );
}