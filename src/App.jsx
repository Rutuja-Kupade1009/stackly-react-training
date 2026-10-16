
import Child from "./child";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>User Information</h1>
      <p className="subtitle">
        React Props - Parent to Child Data Passing
      </p>

      <div className="user-container">
        <Child
          name="Rutuja Kupade"
          city="Pune"
          age={24}
          email="rutuja@example.com"
          phone="9561581938"
        />

        <Child
          name="Akshay Patil"
          city="Mumbai"
          age={25}
          email="akshay@example.com"
          phone="9876543211"
        />

        <Child
          name="Priya Sharma"
          city="Bangalore"
          age={23}
          email="priya@example.com"
          phone="9876543212"
        />

        <Child
          name="Rahul Deshmukh"
          city="Hyderabad"
          age={26}
          email="rahul@example.com"
          phone="9876543213"
        />

        <Child
          name="Sneha Joshi"
          city="Nashik"
          age={22}
          email="sneha@example.com"
          phone="9876543214"
        />
      </div>
    </div>
  );
}