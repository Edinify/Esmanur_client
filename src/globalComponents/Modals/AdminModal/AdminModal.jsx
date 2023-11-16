import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import moment from "moment";
import { ReactComponent as CloseBtn } from "../../../assets/icons/Icon.svg";
import DeleteAdminModal from "../../FuncComponent/components/DeleteAdminModal/DeleteAdminModal";
import { Box } from "@mui/material";
import { setLoadingAdminAction } from "../../../redux/actions/adminsActions";
import { ADMINS_MODAL_ACTION_TYPE } from "../../../redux/actions-type";
import { ValidationSchema } from "./components/ValidationSchema/ValidationSchema";
import Status from "./components/Buttons/Status";
import SubmitBtn from "./components/Buttons/SubmitBtn";
import InputField from "./components/Inputs/InputField";

const AdminModal = () => {
  const dispatch = useDispatch();
  const { adminsModalData } = useSelector(
    (state) => state.adminsModal
  );
  const [classIcon, setClassIcon] = useState(false);
  const inputNameArr1 = ["fullName", "email", "password"];
  const [deleteModal, setDeleteModal] = useState(false);


  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };


  // formik
  const formik = useFormik({
    initialValues: {
      fullName: adminsModalData.fullName ? adminsModalData.fullName : "",
      email: adminsModalData.email ? adminsModalData.email : "",
      password: adminsModalData.password ? adminsModalData.password : "",
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

  const closeModal = () => {
    dispatch({
      type: ADMINS_MODAL_ACTION_TYPE.GET_ADMINS_MODAL,
      payload: { data: {}, openModal: false },
    });
  };

  useEffect(() => {
    dispatch(setLoadingAdminAction(false));
  }, [dispatch]);


  return (
    <div className="create-update-modal-con admin-modal">
      <div className="create-update-modal">
        <div className="create-update-modal-head">
          <h2>{adminsModalData?._id ? "Admin yenilə" : "Admin yarat"}</h2>
          <CloseBtn onClick={closeModal} />
        </div>

        <Box
          onSubmit={(e) => e.preventDefault()}
          component="form"
          sx={{
            width: 500,
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="create-update-modal-form">
            {inputNameArr1.map((name, index) => (
              <InputField
                key={index}
                inputName={name}
                formik={formik}
                setInputValue={setInputValue}
                adminsModalData={adminsModalData}
              />
            ))}
          </div>
        </Box>

        {adminsModalData?._id ? (
          <SubmitBtn
            formik={formik}
            adminsModalData={adminsModalData}
            funcType="update"
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}
          />
        ) : (
          <SubmitBtn
            formik={formik}
            adminsModalData={adminsModalData}
            funcType="create"
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}

          />
        )}

        {adminsModalData?._id && (
          <div className="joined-time">
            Qoşuldu:{" "}
            {moment(adminsModalData.createdAt).format("YYYY.MM.DD")}
          </div>
        )}
        {
          deleteModal &&
          <DeleteAdminModal type="admin" data={adminsModalData}  deleteMod={handleDeleteModal}/>
        }
      </div>
    </div>
  );
};

export default AdminModal;