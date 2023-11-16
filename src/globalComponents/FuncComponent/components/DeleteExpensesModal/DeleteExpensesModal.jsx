import { useDispatch } from "react-redux";
import { deleteExpensesAction } from "../../../../redux/actions/expensesAction";
import { EXPENSES_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";
const DeleteExpensesModal = ({ deleteMod, data,expensesModalData,type }) => {
  
  const dispatch = useDispatch();
  const deleteExpense = (_id) => {
    dispatch(deleteExpensesAction(_id));
    deleteMod(false)
  };


  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>{"Silmək istədiyinizə əminsiniz?"}</p>
        {type==="expenses"?
        <div className="modal-btn">
        <button className="cancel-btn" onClick={() => deleteMod(false)}>
          Ləğv et
        </button>
        <button className="delete-btn" onClick={() =>{
             deleteExpense(expensesModalData._id)
             dispatch({type:EXPENSES_MODAL_ACTION_TYPE.GET_EXPENSES_MODAL,payload:{data:{},openModal:false}})
          }}>
            Sil
          </button>
      </div>
      :
        <div className="modal-btn">
          <button className="cancel-btn" onClick={() => deleteMod(false)}>
            Ləğv et
          </button>
          <button className="delete-btn" onClick={() => deleteExpense(data._id)}>
            Sil
          </button>
        </div>
        }
      </div>
    </div>
  );
};

export default DeleteExpensesModal;
