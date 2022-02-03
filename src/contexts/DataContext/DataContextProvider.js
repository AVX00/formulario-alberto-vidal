import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
    const data = {
        test: "hola",
    };

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
export default DataContextProvider;
