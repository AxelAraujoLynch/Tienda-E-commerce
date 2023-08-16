//Components
import NavBar from "./components/NavBar/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainerComponent";

//Styles
import styles from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <ItemListContainer greeting="BIENVENIDOS A MI TIENDA..." />
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default App;






