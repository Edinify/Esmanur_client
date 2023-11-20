import { useDispatch } from "react-redux";
import { deletetFinection } from "../../../../redux/actions/fineActions";
import { FINE_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";
const DeleteFineModal = ({ deleteMod, data, type, fineModalData }) => {
  const dispatch = useDispatch();
  const deleteFine = (_id) => {
    dispatch(deletetFinection(_id));
    deleteMod(false);
    if (type !== "out-modal") {
      dispatch({
        type: FINE_MODAL_ACTION_TYPE.GET_FINE_MODAL,
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
              deleteFine(type !== "out-modal" ? fineModalData._id : data._id)
            }
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteFineModal;
