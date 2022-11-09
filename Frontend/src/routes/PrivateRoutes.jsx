
import { Navigate } from "react-router-dom";



function PrivateRoute({ children }) {
  const { isAuth } = true

  if (!isAuth) {

    return (
        alert("You Need To Login First"),
        <Navigate to="/login" />
    )
  }

  return children;
}

export default PrivateRoute;
