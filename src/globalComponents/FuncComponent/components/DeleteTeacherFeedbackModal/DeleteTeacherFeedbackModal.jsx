import { useDispatch } from "react-redux";
import { deleteFeedbacksByTeacher } from "../../../../redux/actions/feedbacksByTeacherAction";
import { FEEDBACK_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";


const DeleteTeacherFeedbackModal = ({type, deleteMod, data,feedbackModalData }) => {
  const dispatch = useDispatch();
  const deleteFeedback = (_id) => {
    dispatch(deleteFeedbacksByTeacher(_id));
    deleteMod(false)
  };

  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>Silmək istədiyinizə əminsiniz?</p>
        {type==="feedback"?
        <div className="modal-btn">
              <button className="cancel-btn" onClick={() => deleteMod(false)}>
            Ləğv et
          </button>
          <button className="delete-btn" onClick={() =>{
            deleteFeedback(feedbackModalData._id)
            dispatch({type:FEEDBACK_MODAL_ACTION_TYPE.GET_FEEDBACK_MODAL,payload:{data:{},openModal:false}})
          }}>
            Sil
          </button>
        </div>
        :
       
        <div className="modal-btn">
          <button className="cancel-btn" onClick={() => deleteMod(false)}>
            Ləğv et
          </button>
          <button className="delete-btn" onClick={() => deleteFeedback(data._id)}>
            Sil
          </button>
        </div>
         }
      </div>
    </div>
  );
};

export default DeleteTeacherFeedbackModal;
