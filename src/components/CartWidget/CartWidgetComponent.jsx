import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
  return (
    <div className="d-flex col-16 text-white me-5">
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="text-white"
        style={{ fontSize: "1.5rem", marginRight: "10px" }}
      />
      0
    </div>
  );
};

export default CartWidgetComponent;
