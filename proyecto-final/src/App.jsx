import "./App.css";
import Layout from "./componentes/Layout";
import Productos from "./vistas/Productos";
import { Provider } from "react-redux";
import store from './store'

function App() {
  return (
    <>
      <Provider store={store} >
        <Layout>
          <Productos />
        </Layout>
      </Provider>
    </>
  );
}

export default App;
