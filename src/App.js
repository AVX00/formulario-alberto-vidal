import DataContextProvider from "./contexts/DataContext/DataContextProvider";
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";
function App() {
  const action = () => {
    console.log("hola");
  };

  return (
    <DataContextProvider>
      <Form actionOnSubmit={action}>
        <Button type="submit" />
      </Form>
    </DataContextProvider>
  );
}

export default App;
