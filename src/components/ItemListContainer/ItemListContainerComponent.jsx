import styles from "./ItemListContainer.css";

const ItemListContainerComponent = ({ greeting }) => {
  return (
    <div className="bg-warning d-flex justify-content-center mt-5 ">
      {greeting}
    </div>
  );
};

export default ItemListContainerComponent;
