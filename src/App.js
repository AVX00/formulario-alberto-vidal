import DataContextProvider from "./contexts/DataContext/DataContextProvider";
import PersonalData from "./components/PersonalData/PersonalData";
import "./App.css";
function App() {
  const action = () => {
    console.log("hola");
  };

  return (
    <DataContextProvider>
      <div className="container bg-dark">
        <PersonalData formAction={action} />
      </div>
    </DataContextProvider>
  );
}

export default App;
