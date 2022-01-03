import "./common/style.scss";
import Layout from "./common/components/Layout";
import Feed from "./feed/Feed";
import Modal from "./common/components/Modal";

function App() {
  return (
    <Layout>
      <Modal title="Delete comment"></Modal>
      <Feed />
    </Layout>
  );
}

export default App;
