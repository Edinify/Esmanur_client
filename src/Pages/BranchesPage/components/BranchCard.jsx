import React from "react";
import moment from "moment";
import { useState } from "react";
import FuncComponent from "../../../globalComponents/FuncComponent/FuncComponent";
import { useDispatch, useSelector } from "react-redux";
import { BRANCHES_MODAL_ACTION_TYPE } from "../../../redux/actions-type";
import { userUpdateAction } from "../../../redux/actions/userAction";


const BranchCard = ({ data }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [deleteIncomesModal, setDeleteIncomesModal] = useState(false);
  const handleDeleteModal = () => {
    setDeleteIncomesModal(!deleteIncomesModal);
  };
  const handleUpdate = (data) => {
    const { name, _id } = data;
    dispatch({
      type: BRANCHES_MODAL_ACTION_TYPE.GET_BRANCH_MODAL,
      payload: {
        data: {
          name,
          _id,
        },
        openModal: true,
      },
    });
  };
  const selectBranch = (id) => {
    dispatch(userUpdateAction(user?._id, {branch: id}))
  }


  return (
    <div className={`add-branch ${user?.branch === data._id ? 'active' : ''}`}>
      <p  onClick={() => selectBranch(data._id)}>{data.name}</p>
      <FuncComponent
        handleDeleteModal={handleDeleteModal}
        handleUpdate={handleUpdate}
        data={data}
        dataType='branches'
      />
    </div>
  );
};

export default BranchCard;
