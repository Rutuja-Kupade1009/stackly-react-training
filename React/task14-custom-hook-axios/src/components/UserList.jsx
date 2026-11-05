
import useFetchData from "../hooks/useFetchData";

const UserList = () => {

  const {
    data: users,
    loading,
    error
  } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <h2 className="status">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="error">Error: {error}</h2>;
  }

  return (
    <div className="container">

      <h1>User Directory</h1>
      <p className="subtitle">
        User information fetched using Axios Custom Hook
      </p>

      <div className="user-grid">

        {users.map((user) => (

          <div className="user-card" key={user.id}>

            <div className="user-header">
              <div className="avatar">
                {user.name.charAt(0)}
              </div>

              <div>
                <h2>{user.name}</h2>
                <p>@{user.username}</p>
              </div>
            </div>

            <div className="user-details">

              <p><strong>ID:</strong> {user.id}</p>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Phone:</strong> {user.phone}
              </p>

              <p>
                <strong>Website:</strong> {user.website}
              </p>

              <p>
                <strong>City:</strong> {user.address.city}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default UserList;
