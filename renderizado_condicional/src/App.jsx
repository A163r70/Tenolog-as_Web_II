import PackingList from './PackingList.jsx';

export default function App() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Desafíos de Renderizado Condicional en React</h1>
      <hr />
      
      {/* Renderizamos el componente que une los 3 desafíos */}
      <PackingList />
    </main>
  );
}