import { useDispatch } from "react-redux";
import { deletetBonusAction } from "../../../../redux/actions/bonusActions";
import { BONUS_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";
const DeleteBonusModal = ({data, deleteMod,type,bonusModalData }) => {
  
  const dispatch = useDispatch();
  const deleteBonus = (_id) => {
    dispatch(deletetBonusAction(_id));
    deleteMod(false)
  };


  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>Silmək istədiyinizə əminsiniz?</p>
        {type==="bonus"?
        
        <div className="modal-btn">
          <button className="cancel-btn" onClick={() => deleteMod(false)}>
            Ləğv et
          </button>
          <button className="delete-btn" onClick={() =>{
             deleteBonus(bonusModalData?._id)
             dispatch({type:BONUS_MODAL_ACTION_TYPE.GET_BONUS_MODAL,payload:{data:{},openModal:false}})
          }}>
            Sil
          </button>
        </div>
        :
        <div className="modal-btn">
          <button className="cancel-btn" onClick={() => deleteMod(false)}>
            Ləğv et
          </button>
          <button className="delete-btn" onClick={() => deleteBonus(data._id)}>
            Sil
          </button>
        </div>
}
      </div>
    </div>
  );
};

export default DeleteBonusModal;
