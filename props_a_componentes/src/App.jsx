import Gallery from './gallery.jsx';
import Profile2 from './profile2.jsx';
import Card from './Card.jsx';
import Avatar from './avatar.jsx';

export default function MyApp() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Ejercicios de Props y Modularización en React</h1>
      
      <hr />

      {/* Ejercicio 1: Galería y extracción de componentes */}
      <section>
        <h2>Ejercicio 1: Galería</h2>
        <Gallery />
      </section>

      <hr />

      {/* Ejercicio 2: Ajustar tamaño de imagen */}
      <section>
        <h2>Ejercicio 2: Tamaño dinámico</h2>
        <Profile2 />
      </section>

      <hr />

      {/* Ejercicio 3: Pasar JSX en la prop children */}
      <section>
        <h2>Ejercicio 3: Tarjetas con children</h2>
        
        <Card>
          <h3>Katsuko Saruhashi</h3>
          <Avatar
            size={80}
            person={{
              name: 'Katsuko Saruhashi',
              imageId: 'YfeOqp2'
            }}
          />
          <p>Geoquímica japonesa.</p>
        </Card>

        <Card>
          <h3>Gregorio Y. Zara</h3>
          <p>Inventor y científico filipino.</p>
        </Card>
      </section>
    </main>
  );
}