import { useState, React } from "react";
import FuncComponent from "../../../../globalComponents/FuncComponent/FuncComponent";
import { useSelector, useDispatch } from "react-redux";
import { COURSES_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";

const CourseCard = ({ data, mode, cellNumber }) => {
  const dispatch = useDispatch();
  const [deleteCourseModal, setDeleteCourseModal] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);

  const handleDeleteModal = () => {
    setDeleteCourseModal(!deleteCourseModal);
  };
  const handleUpdate = (data) => {
    const { name, category, _id, status } = data;
    dispatch({
      type: COURSES_MODAL_ACTION_TYPE.GET_COURSES_MODAL,
      payload: { data: { name, _id, status }, openModal: true },
    });
  };
  return (
    <>
      {mode === "desktop" ? (
        <tr className="class-table">
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              <div className="table-scroll-text">{data.name}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <FuncComponent
              handleUpdate={handleUpdate}
              handleDeleteModal={handleDeleteModal}
              data={data}
              deleteCourseModal={deleteCourseModal}
            />
          </td>
        </tr>
      ) : (
        <div className="content-box">
            <div className="left">
              <h3 className="name">{data.name}</h3>
            </div>

            <div className="right">
              <FuncComponent
                handleUpdate={handleUpdate}
                handleDeleteModal={handleDeleteModal}
                data={data}
                deleteCourseModal={deleteCourseModal}
                dataType="courses"
              />
            </div>
        </div>
      )}
    </>
  );
};

export default CourseCard;
