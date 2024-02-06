import { useDispatch } from "react-redux";
import { deleteItem } from "../features/cart/cartSlice";
import Button from "./Button";

export default function DeleleItem({ id }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(id));
  }

  return (
    <Button onClick={handleDeleteItem} type="small">
      Delete
    </Button>
  );
}
