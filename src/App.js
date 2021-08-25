import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Router>
      <Suspense fallBack={<p>Loading m8...</p>}>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
