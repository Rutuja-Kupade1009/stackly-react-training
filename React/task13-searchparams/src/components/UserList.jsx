import { useSearchParams } from "react-router-dom";
import { users } from "../data/users";

function UserList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const recordsPerPage = 5;
  const totalPages = Math.ceil(users.length / recordsPerPage);

  // Read page number from URL
  const pageParam = Number(searchParams.get("page"));

  // Validate page number
  const currentPage =
    Number.isInteger(pageParam) && pageParam >= 1 && pageParam <= totalPages
      ? pageParam
      : 1;

  // Calculate records to display
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  const currentUsers = users.slice(startIndex, endIndex);

  // Next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: String(currentPage + 1) });
    }
  };

  // Previous page
  const handlePrevious = () => {
    if (currentPage > 1) {
      setSearchParams({ page: String(currentPage - 1) });
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1>User Management</h1>
          <p>Manage and view all registered users</p>
        </div>

        <span className="total-users">
          Total Users: {users.length}
        </span>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page <strong>{currentPage}</strong> of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <p className="record-info">
        Showing {startIndex + 1} -{" "}
        {Math.min(endIndex, users.length)} of {users.length} users
      </p>
    </div>
  );
}

export default UserList;