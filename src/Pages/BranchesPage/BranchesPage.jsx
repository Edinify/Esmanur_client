import React, { useEffect } from "react";
import { ReactComponent as PlusIcon } from "../../assets/icons/Plus.svg";
import { useSelector, useDispatch } from "react-redux";
import BranchesData from "./components/BranchesData";
import { BRANCHES_MODAL_ACTION_TYPE } from "../../redux/actions-type";

const BranchesPage = () => {
  const dispatch = useDispatch();
  const openBranchModal = () => {
    dispatch({
      type: BRANCHES_MODAL_ACTION_TYPE.GET_BRANCH_MODAL,
      payload: { data: {}, openModal: true },
    });
  };
 
  return (
    <div className="branches-page">
      <div className="container">
        <div className="branches-con">
          <BranchesData />
          <button className="add-branch add" onClick={openBranchModal}>
            <PlusIcon /> <p>Əlavə et</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BranchesPage;
