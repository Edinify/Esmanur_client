import { useDispatch } from "react-redux";
import "./style.css";
import { deleteStudentAction } from "../../../../redux/actions/studentsActions";
const DeleteStudentModal = ({ deleteMod, data }) => {
  const dispatch = useDispatch();
  const deleteTeacher = (_id) => {
    dispatch(deleteStudentAction(_id));
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

export default DeleteStudentModal;
