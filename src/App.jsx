import './App.scss';
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

import useToken from "./Components/Hooks/useToken";

function App() {
  const [setLoading] = useToken()

  if(setLoading) {
    return <AuthenticatedApp />
  }else {
    return <UnauthenticatedApp />
  }
}

export default App;
