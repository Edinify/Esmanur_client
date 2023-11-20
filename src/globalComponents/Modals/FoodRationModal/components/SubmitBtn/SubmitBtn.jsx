import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as DeleteIcon } from "../../../../../assets/icons/Delete button.svg";
import { createFoodRationAction, updateFoodRationAction } from "../../../../../redux/actions/foodRationAction";
import LoadingBtn from "../../../../Loading/components/LoadingBtn/LoadingBtn";
import { useCustomHook } from "../../../../GlobalFunctions/globalFunctions";

export default function SubmitBtn({
  funcType,
  foodRationModalData,
  closeModal,
  setDeleteModal,
}) {
  const dispatch = useDispatch();
  const { foodRationModalLoading } = useSelector((state) => state.foodRationModal);
  const { getFinanceDataAfterCreate } = useCustomHook();

  const expensesCreate = () => {
    if (foodRationModalData?._id) {
      dispatch(updateFoodRationAction(foodRationModalData?._id, foodRationModalData));
    } else {
      dispatch(createFoodRationAction({ ...foodRationModalData }));
    }
    getFinanceDataAfterCreate();
  };

  return (
    <div>
      {funcType === "update" ? (
        <div className="create-update-modal-btn update ">
          <button onClick={expensesCreate} disabled={foodRationModalLoading}>
            {foodRationModalLoading ? (
              <LoadingBtn />
            ) : funcType === "update" ? (
              "Yenilə"
            ) : (
              "Yarat"
            )}
          </button>

          <div className="delete-income-modal-btn">
            <DeleteIcon onClick={() => setDeleteModal(true)} />
          </div>
          <button
            className="delete-income-modal-btn-mobile"
            onClick={() => setDeleteModal(true)}
          >
            Sil
          </button>
        </div>
      ) : (
        <div className="create-update-modal-btn">
          <button onClick={expensesCreate} disabled={foodRationModalLoading}>
            {foodRationModalLoading ? (
              <LoadingBtn />
            ) : funcType === "update" ? (
              "Yenilə"
            ) : (
              "Yarat"
            )}
          </button>
        </div>
      )}
    </div>
  );
}
