import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import { ValidationSchema } from "./components/ValidationSchema/ValidationSchema";
import { ReactComponent as CloseBtn } from "../../../assets/icons/Icon.svg";
import { INCOMES_MODAL_ACTION_TYPE } from "../../../redux/actions-type";
import InputField from "./components/InputField/InputField";
import SubmitBtn from "./components/SubmitBtn/SubmitBtn";
import DeleteIncomessModal from "../../FuncComponent/components/DeleteIncomesModal/DeleteIncomesModal";

export const IncomesModal = () => {
  const dispatch = useDispatch();
  const { incomesModalData } = useSelector((state) => state.incomesModal);
  const [deleteModal, setDeleteModal] = useState(false);
  const inputNameArr = ["appointment", "amount", "date"];

  // formik
  const formik = useFormik({
    initialValues: {
      appointment: incomesModalData?.appointment
        ? incomesModalData?.appointment
        : "",
      amount: incomesModalData?.amount ? incomesModalData?.amount : "",
      date: incomesModalData?.date ? incomesModalData?.date : "",
    },
    validationSchema: ValidationSchema,
  });
  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };
  const updateModalState = (keyName, value) => {
    dispatch({
      type: INCOMES_MODAL_ACTION_TYPE.GET_INCOMES_MODAL,
      payload: {
        data: { ...incomesModalData, [keyName]: value },
        openModal: true,
      },
    });
  };
  const closeModal = () => {
    dispatch({
      type: INCOMES_MODAL_ACTION_TYPE.GET_INCOMES_MODAL,
      payload: { data: {}, openModal: false },
    });
  };

  return (
    <div className="create-update-modal-con">
      <div className="create-update-modal">
        <div className="create-update-modal-head">
          <h2>
            {incomesModalData?._id ? "Mədaxili yenilə" : "Mədaxil yaradın"}
          </h2>
          <CloseBtn onClick={closeModal} />
        </div>

        <Box
          onSubmit={(e) => e.preventDefault()}
          component="form"
          sx={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="create-update-modal-form">
            {inputNameArr.map((name, index) => (
              <InputField
                key={index}
                inputName={name}
                incomesModalData={incomesModalData}
                updateModalState={updateModalState}
                formik={formik}
                setInputValue={setInputValue}
              />
            ))}
          </div>
        </Box>

        {incomesModalData?._id ? (
          <SubmitBtn
            formik={formik}
            funcType="update"
            incomesModalData={incomesModalData}
            setDeleteModal={setDeleteModal}
          />
        ) : (
          <SubmitBtn
            formik={formik}
            funcType="create"
            incomesModalData={incomesModalData}
            setDeleteModal={setDeleteModal}
          />
        )}
        {deleteModal && (
          <DeleteIncomessModal
            incomesModalData={incomesModalData}
            deleteMod={handleDeleteModal}
          />
        )}
      </div>
    </div>
  );
};
