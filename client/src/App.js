import "./common/style.scss";
import Layout from "./common/components/Layout";
import Card from "./common/components/Card";
import Text from "./common/components/Text";
import Icon from "./common/components/Icon";

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
      <Icon name="trash" color="red" />
    </Layout>
  );
}

export default App;
