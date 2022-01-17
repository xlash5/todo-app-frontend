import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import TodoList from "./pages/Home/TodoList";

function App() {
  // const defaultRoutes = () => {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<Login />} />
  //       <Route path="/signup" element={<SignUp />} />
  //       <Route path='*' exact={true} element={<h1>404 NOT FOUND</h1>} />
  //     </Routes>
  //   )
  // }

  // const loggedInRoutes = () => {
  //   return (
  //     <Routes>
  //       <Route path="/id/:id" element={<Child />} />
  //       <Route path="todolist" element={<TodoList />} />
  //       <Route path='*' exact={true} element={<h1>404 NOT FOUND</h1>} />
  //     </Routes>
  //   )
  // }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="todolist" element={<TodoList />} />
        <Route path='*' exact={true} element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}