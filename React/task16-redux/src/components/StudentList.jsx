
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "../features/students/studentSlice";

function StudentList() {
  const students = useSelector(
    (state) => state.students.students
  );

  const dispatch = useDispatch();

  return (
    <div className="list-card">
      <div className="list-header">
        <div>
          <h2>Registered Students</h2>
          <p className="subtitle">
            Student information stored in Redux
          </p>
        </div>

        <span className="student-count">
          Total: {students.length}
        </span>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h3>No Students Registered</h3>
          <p>Submit the registration form to see student details here.</p>
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Role</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.city}</td>
                  <td>
                    <span className="role-badge">
                      {student.role}
                    </span>
                  </td>
                  <td>{student.department}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => dispatch(deleteStudent(student.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentList;
