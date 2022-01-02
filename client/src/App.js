import "./common/style.scss";
import Layout from "./common/components/Layout";
import Card from "./common/components/Card";
import Text from "./common/components/Text";
import ButtonText from "./common/components/ButtonText";
import Avatar from "./common/components/Avatar";

function App() {
  return (
    <Layout>
      <Card>
        <Avatar img="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png" />
        <Text isBold color="purple">
          amyrobson
        </Text>
        <Text>
          Impressive! Though it seems the drag feature could be improved. But
          obertall it looks incredible. You've nailed the design and the
          responsiveness at variois breakpoints works really well.
        </Text>
        <ButtonText iconName="trash" color="red">
          Delete
        </ButtonText>
      </Card>
    </Layout>
  );
}

export default App;
