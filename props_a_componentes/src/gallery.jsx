import Avatar from './avatar.jsx';

export default function Gallery() {
  return (
    <section>
      <h2>Científicos notables</h2>
      <Profile 
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="física y química"
        discovery="polonio (elemento químico)"
        awards={['Premio Nobel de Física', 'Premio Nobel de Química', 'Medalla Davy', 'Medalla Matteucci']}
      />
    </section>
  );
}

function Profile({ name, imageId, profession, discovery, awards }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <Avatar
        size={70}
        person={{ name: name, imageId: imageId }}
      />
      <ul>
        <li><b>Profesión:</b> {profession}</li>
        <li><b>Premios:</b> {awards.length} ({awards.join(', ')})</li>
        <li><b>Descubrió:</b> {discovery}</li>
      </ul>
    </section>
  );
}