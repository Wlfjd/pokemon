export function Pokemon({ item, onDelete }) {
  return (
    <div style={{ padding: "30px", display: "flex" }}>
      <div>
        No.{item.id} {item.name}
      </div>
      <button onClick={() => onDelete(item.id)}>x</button>
    </div>
  );
}
