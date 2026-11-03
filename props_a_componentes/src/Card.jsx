export default function Card({ children }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {children}
    </div>
  );
}