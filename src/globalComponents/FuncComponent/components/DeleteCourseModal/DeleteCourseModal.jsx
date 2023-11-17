import { useDispatch, useSelector } from "react-redux";
import { deleteCoursesAction } from "../../../../redux/actions/coursesActions";



const DeleteCourseModal = ({
  deleteMod,
  data,
  modal,
  setModal,
  deletedItem,
  dataId,
}) => {
  const dispatch = useDispatch();


  const deleteCourse = (_id) => {
    dispatch(deleteCoursesAction(_id));
    deleteMod(false);
  };





  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>{`Silmək istədiyinizə əminsiniz?`}</p>
        <div className="modal-btn">
          <button className="cancel-btn" onClick={() => deleteMod(false)}>
            Ləğv et
          </button>

            <button
              className="delete-btn"
              onClick={() => deleteCourse(data._id)}
            >
              Sil
            </button>

        </div>
      </div>
    </div>
  );
};

export default DeleteCourseModal;
