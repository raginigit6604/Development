import React from "react";
import { UserProvider,useUser } from "./context/UserContext";
const App = ()=>{
const [user,setUser] = React.useState(null);
const[isAuthenticated,setAuthenticated] = React.useState(false);

return(
  <div>
  <UserProvider>

  </UserProvider>
  </div>
)
}
export default App;