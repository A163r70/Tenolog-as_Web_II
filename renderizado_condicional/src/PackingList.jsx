import Item from './Item.jsx';

export default function PackingList() {
  return (
    <section>
      <h2>Lista de Equipaje de Sally Ride</h2>
      <ul>
        <Item 
          importance={9} 
          isPacked={true} 
          name="Traje espacial" 
        />
        <Item 
          importance={0} 
          isPacked={true} 
          name="Casco con hoja de oro" 
        />
        <Item 
          importance={6} 
          isPacked={false} 
          name="Fotografía de Tam" 
        />
      </ul>
    </section>
  );
}