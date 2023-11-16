import { useDispatch } from "react-redux";
import { deleteTeacherAction } from "../../../../redux/actions/teachersActions";
const DeleteTeacherModal = ({ deleteMod, data }) => {
  
  const dispatch = useDispatch();
  const deleteTeacher = (_id) => {
    dispatch(deleteTeacherAction(_id));
    deleteMod(false)
  };

  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>{`Silmək istədiyinizə əminsiniz, "${data.fullName}"?`}</p>
        <div className="modal-btn">
          <button className="cancel-btn" onClick={() => deleteMod(false)}>
            Ləğv et
          </button>
          <button className="delete-btn" onClick={() => deleteTeacher(data._id)}>
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTeacherModal;
