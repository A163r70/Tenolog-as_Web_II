import Avatar from './avatar';

export default function Profile2() {
  return (
    <div>
        <h2> Ajustar el tamaño de la imágen</h2>
        <Avatar
        size={80}
        person={{ 
            name: 'Gregorio Y. Zara', 
            imageId: '7vQD0fP'
        }}
        />
    </div>
  )};