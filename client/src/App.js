import "./common/style.scss";
import Layout from "./common/components/Layout";
import Card from "./common/components/Card";
import Text from "./common/components/Text";

function App() {
  return (
    <Layout>
      <Card>
        <Text isBold color="purple">
          amyrobson
        </Text>
        <Text>
          Impressive! Though it seems the drag feature could be improved. But
          obertall it looks incredible. You've nailed the design and the
          responsiveness at variois breakpoints works really well.
        </Text>
      </Card>
    </Layout>
  );
}

export default App;
