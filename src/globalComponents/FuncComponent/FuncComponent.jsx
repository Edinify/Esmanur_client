import React, { useEffect, useRef } from "react";
import "./funcComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { FUNC_COMPONENT_ACTION_TYPE } from "../../redux/actions-type";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
import DeleteCourseModal from "./components/DeleteCourseModal/DeleteCourseModal";
import DeleteTeacherModal from "./components/DeleteTeacherModal/DeleteTeacherModal";
import DeleteAdminModal from "./components/DeleteAdminModal/DeleteAdminModal";
import DeleteStudentModal from "./components/DeleteStudentModal/DeleteStudentModal";
import DeleteExpensesModal from "./components/DeleteExpensesModal/DeleteExpensesModal";
import DeleteFoodRationModal from "./components/DeleteFoodRationModal/DeleteFoodRationModal";
import DeleteUniformModal from "./components/DeleteUniformModal/DeleteUniformModal";
import DeleteIncomesModal from "./components/DeleteIncomesModal/DeleteIncomesModal";
import DeleteBonusModal from "./components/DeleteBonusModal/DeleteBonusModal";
import DeleteFineModal from "./components/DeleteFineModal/DeleteFineModal";
const FuncComponent = ({
  handleDeleteModal,
  handleUpdate,
  data,
  deleteModal,
  deleteAdminModal,
  deleteCourseModal,
  deleteStudentModal,
  deleteExpensesModal,
  deleteFoodRationModal,
  deleteUniformModal,
  deleteIncomesModal,
  deleteFineModal,
  deleteBonusModal,
  dataType,
}) => {
  const dispatch = useDispatch();
  const { funcComp } = useSelector((state) => state.funcComponent);
  const modalRef = useRef(null);

  const handleClickOutside = () => {
    dispatch({
      type: FUNC_COMPONENT_ACTION_TYPE.GET_FUNC_COMP,
      payload: false,
    });
  };

  const handleToggleModal = (e) => {
    e.stopPropagation();
    if (funcComp === data._id) {
      dispatch({
        type: FUNC_COMPONENT_ACTION_TYPE.GET_FUNC_COMP,
        payload: false,
      });
    } else {
      dispatch({
        type: FUNC_COMPONENT_ACTION_TYPE.GET_FUNC_COMP,
        payload: data._id,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="func-component">
      <MoreIcon className="more-icon" onMouseDown={handleToggleModal} />
      <div
        className={`delete-update-modal ${
          funcComp === data._id ? "active" : ""
        }`}
        ref={modalRef}
      >
        <>
          <h4 onClick={() => handleUpdate(data)}>Yenilə</h4>
          <h4
            className="delete-func"
            onClick={() => handleDeleteModal(data._id)}
          >
            Sil
          </h4>
        </>
      </div>
      {deleteModal && (
        <DeleteTeacherModal data={data} deleteMod={handleDeleteModal} />
      )}
      {deleteAdminModal && (
        <DeleteAdminModal data={data} deleteMod={handleDeleteModal} />
      )}
      {deleteCourseModal && (
        <DeleteCourseModal data={data} deleteMod={handleDeleteModal} />
      )}
      {deleteStudentModal && (
        <DeleteStudentModal data={data} deleteMod={handleDeleteModal} />
      )}
      {deleteExpensesModal && (
        <DeleteExpensesModal data={data} deleteMod={handleDeleteModal} type={'out-modal'}/>
      )}
      {deleteFoodRationModal && (
        <DeleteFoodRationModal data={data} deleteMod={handleDeleteModal} type={'out-modal'}/>
      )}
       {deleteUniformModal && (
        <DeleteUniformModal data={data} deleteMod={handleDeleteModal} type={'out-modal'}/>
      )}
      {deleteIncomesModal && (
        <DeleteIncomesModal data={data} deleteMod={handleDeleteModal} type={'out-modal'}/>
      )}
      {deleteBonusModal && (
        <DeleteBonusModal data={data} deleteMod={handleDeleteModal} type={'out-modal'}/>
      )}
      {deleteFineModal && (
        <DeleteFineModal data={data} deleteMod={handleDeleteModal} type={'out-modal'}/>
      )}
    </div>
  );
};

export default FuncComponent;
