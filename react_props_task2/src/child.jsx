
export default function Child(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p><strong>City:</strong> {props.city}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Phone:</strong> {props.phone}</p>
    </div>
  );
}

