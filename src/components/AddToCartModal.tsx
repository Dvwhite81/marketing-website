import { useState } from 'react';
import { Product } from '../data';
import '../styles/AddToCartModal.css';
import { useNavigate } from 'react-router-dom';

interface AddToCartModalProps {
  currentItem: Product | null;
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  updateCart: (item: Product, quantity: number) => void;
}

const AddToCartModal = ({ currentItem, modalVisible, setModalVisible, updateCart }: AddToCartModalProps) => {
  const navigate = useNavigate();
  const [numberToAdd, setNumberToAdd] = useState(1);

  if (!currentItem || !modalVisible) return;

  const handleAddItem = () => {
    if (numberToAdd < 1) return;

    updateCart(currentItem, numberToAdd);
    navigate('/cart');
    setModalVisible(false);
  };

  return (
    <div id="modal">
      <button
        type="button"
        className="btn modal-close-btn"
        onClick={() => setModalVisible(false)}
      >
        X
      </button>
      <div id="modal-content">
        <p>{currentItem.name}</p>
        <label>
          Quantity?{'  '}
          <input
            type="number"
            value={numberToAdd}
            onChange={({ target }) => setNumberToAdd(Number(target.value))}
          />
        </label>
        <button
          type="button"
          className="btn modal-add-btn"
          onClick={handleAddItem}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToCartModal;
