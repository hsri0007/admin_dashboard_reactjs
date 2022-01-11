import DrawerComposition from "./components/compositions/composition";
import TableData from "./tabledata";
import "./App.css";

function App() {
  const Data = () => <TableData />;
  const state = ["Inboxs", "Starred", "Send email", "Drafts"];
  return (
    <div>
      <DrawerComposition state={state}>
        <Data />
      </DrawerComposition>
    </div>
  );
}

export default App;
