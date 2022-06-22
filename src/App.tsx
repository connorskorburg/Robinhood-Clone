import Layout from "./components/Layout";
import Provider from "./context/Provider";

const App = () => {
  return (
    <Provider>
      <Layout />
    </Provider>
  );
};

export default App;
