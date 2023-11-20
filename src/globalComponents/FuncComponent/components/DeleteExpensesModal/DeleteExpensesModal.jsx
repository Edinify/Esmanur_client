import { useDispatch } from "react-redux";
import { deleteExpensesAction } from "../../../../redux/actions/expensesAction";
import { EXPENSES_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";
const DeleteExpensesModal = ({ deleteMod, data, expensesModalData, type }) => {
  const dispatch = useDispatch();
  const deleteExpense = (_id) => {
    dispatch(deleteExpensesAction(_id));
    deleteMod(false);
    if (type !== "out-modal") {
      dispatch({
        type: EXPENSES_MODAL_ACTION_TYPE.GET_EXPENSES_MODAL,
        payload: { data: {}, openModal: false },
      });
    }
  };

  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>Silmək istədiyinizə əminsiniz?</p>
        <div className="modal-btn">
          <button className="cancel-btn" onClick={() => deleteMod(false)}>
            Ləğv et
          </button>
          <button
            className="delete-btn"
            onClick={() =>
              deleteExpense(
                type !== "out-modal" ? expensesModalData._id : data._id
              )
            }
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteExpensesModal;
