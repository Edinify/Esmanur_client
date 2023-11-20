import { useDispatch } from "react-redux";
import { deletetBonusAction } from "../../../../redux/actions/bonusActions";
import { BONUS_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";
const DeleteBonusModal = ({ data, deleteMod, type, bonusModalData }) => {
  const dispatch = useDispatch();
  const deleteBonus = (_id) => {
    dispatch(deletetBonusAction(_id));
    deleteMod(false);
    if (type !== "out-modal") {
      dispatch({
        type: BONUS_MODAL_ACTION_TYPE.GET_BONUS_MODAL,
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
              deleteBonus(type !== "out-modal" ? bonusModalData?._id : data._id)
            }
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBonusModal;
