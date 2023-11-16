import { useDispatch } from "react-redux";
import { deleteFeedbackAction } from "../../../../redux/actions/generalfeedbackActions";
const DeleteFeedbackModal = ({ deleteMod, data }) => {
  
  const dispatch = useDispatch();
  const deleteFeedback = (_id) => {
    dispatch(deleteFeedbackAction(_id));
    deleteMod(false)
  };

  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>{"Silmək istədiyinizə əminsiniz?"}</p>
        <div className="modal-btn">
          <button className="cancel-btn" onClick={() => deleteMod(false)}>
            Ləğv et
          </button>
          <button className="delete-btn" onClick={() => deleteFeedback(data._id)}>
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteFeedbackModal;
