import { useDispatch } from "react-redux";
import { deleteIncomesAction } from "../../../../redux/actions/incomeActions";
import { INCOMES_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";
const DeleteIncomesModal = ({ deleteMod, data,type,incomesModalData }) => {
  
  const dispatch = useDispatch();
  const deleteIncomes = (_id) => {
    dispatch(deleteIncomesAction(_id));
    deleteMod(false)
  };


  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>{"Silmək istədiyinizə əminsiniz?"}</p>
        {type==="incomes" ?
         <div className="modal-btn">
         <button className="cancel-btn" onClick={() => deleteMod(false)}>
           Ləğv et
         </button>
         <button className="delete-btn" onClick={() =>{
             deleteIncomes(incomesModalData._id)
             dispatch({type:INCOMES_MODAL_ACTION_TYPE.GET_INCOMES_MODAL,payload:{data:{},openModal:false}})
          }}>
            Sil
          </button>
       </div>

       : <div className="modal-btn">
       <button className="cancel-btn" onClick={() => deleteMod(false)}>
         Ləğv et
       </button>
       <button className="delete-btn" onClick={() => deleteIncomes(data._id)}>
         Sil
       </button>
     </div>
        }

      </div>
    </div>
  );
};

export default DeleteIncomesModal;
