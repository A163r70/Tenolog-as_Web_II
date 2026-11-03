export default function Item({ name, isPacked, importance }) {
  return (
    <li className="item">
      {/* Nombre del elemento */}
      {name} 

      {/* Desafío 1: Operador lógico && (Muestra el check si isPacked es true) */}
      {isPacked && ' ✅'}

      {/* Desafío 2: Operador ternario para mostrar la importancia condicionalmente */}
      {importance > 0 ? (
        <span style={{ fontSize: '0.9rem', color: '#666', marginLeft: '8px' }}>
          (Importancia: {importance})
        </span>
      ) : null}
    </li>
  );
}