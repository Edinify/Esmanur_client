import { useDispatch, useSelector } from "react-redux";
import { deleteCoursesAction } from "../../../../redux/actions/coursesActions";
// import { deleteTablePageAction } from "../../redux/actions/mainLessonsDataAction";
import { deleteMainLessonsDataAction } from "../../../../redux/actions/mainLessonsDataAction";
import { deleteCurrentLessonsDataAction } from "../../../../redux/actions/currentLessonsDataAction";
import { useLocation } from "react-router-dom";
import LoadingBtn from "../../../Loading/components/LoadingBtn/LoadingBtn";

const DeleteCourseModal = ({
  deleteMod,
  data,
  modal,
  setModal,
  deletedItem,
  dataId,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { tableType } = useSelector((state) => state.tableType);
  const { lessonDeleteModalLoading } = useSelector((state) => state.modalLesson);

  const deleteCourse = (_id) => {
    dispatch(deleteCoursesAction(_id));
    deleteMod(false);
  };

  const deleteClass = (_id) => {
    if (tableType === "current") {
      dispatch(deleteCurrentLessonsDataAction(_id));
    } else if (tableType === "main") {
      dispatch(deleteMainLessonsDataAction(_id));
    } 
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
          {deletedItem === "lesson" ? (
            <button className="delete-btn" onClick={() => deleteClass(dataId)}>
              {/* {lessonDeleteModalLoading ? <LoadingBtn /> : 'Sil'} */}
              Sil
            </button>
          ) : (
            <button
              className="delete-btn"
              onClick={() => deleteCourse(data._id)}
            >
              Sil
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteCourseModal;
