import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField } from "@mui/material";
import { ReactComponent as CloseBtn } from "../../../assets/icons/Icon.svg";
import { FOOD_RATION_MODAL_ACTION_TYPE } from "../../../redux/actions-type";
import InputField from "./components/InputField/InputField";
import SubmitBtn from "./components/SubmitBtn/SubmitBtn";
import Category from "./components/InputDropdowns/Category";
import DeleteFoodRationModal from "../../FuncComponent/components/DeleteFoodRationModal/DeleteFoodRationModal";
export const FoodRationModal = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const inputNameArr = ["appointment", "amount","date"];
  const { foodRationModalData } = useSelector(
    (state) => state.foodRationModal
  );
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const selectedCategoryList = [
    { key: "food", name: "Qida" },
    { key: "cleaningSupplies", name: "Təmizlik ləvazimatları " },
    { key: "repair", name: "Təmir" },
    { key: "lease", name: "İcarə" },
    { key: "equipment", name: "Avadanlıq" },
    {key :"other",name:"Digər"}
  ];

  const updateModalState = (keyName, value) => {
    dispatch({
      type: FOOD_RATION_MODAL_ACTION_TYPE.GET_FOOD_RATION_MODAL,
      payload: {
        data: { ...foodRationModalData, [keyName]: value },
        openModal: true,
      },
    });
  };
  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const closeModal = () => {
    dispatch({
      type: FOOD_RATION_MODAL_ACTION_TYPE.GET_FOOD_RATION_MODAL,
      payload: { data: {}, openModal: false },
    });
  };
  const categoryDropdown = () => {
    setCategoryOpen(!categoryOpen);
  };
  const categoryAddData = (item) => {
    updateModalState("category", item.key);
    setCategoryOpen(false);
    setSelectedCategory(item);
  };

//  console.log('food');

  useEffect(() => {
    if (foodRationModalData?._id) {
      if (foodRationModalData.category) {
        setSelectedCategory({
          name: selectedCategoryList.filter(
            (item) => item.key === foodRationModalData.category
          )[0]?.name,
        });
      }
    }
    else if (location.pathname === "/finance/food-ration") {
      updateModalState("category", 'food');
      setSelectedCategory({name:'Qida'})
    }
  }, []);


  return (
    <div className="create-update-modal-con">
      <div className="create-update-modal">
        <div className="create-update-modal-head">
          <h2>
            {foodRationModalData?._id ? "Məhsulu yenilə" : "Məhsul yaradın"}
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
            <Category
              selectedCategory={selectedCategory}
              categoryDropdown={categoryDropdown}
              categoryOpen={categoryOpen}
              selectedCategoryList={selectedCategoryList}
              categoryAddData={categoryAddData}
            />
            {inputNameArr.map((name, index) => (
              <InputField
                key={index}
                inputName={name}
                foodRationModalData={foodRationModalData}
                updateModalState={updateModalState}
              />
            ))}
          </div>
        </Box>

        {foodRationModalData?._id ? (
          <SubmitBtn
            funcType="update"
            foodRationModalData={foodRationModalData}
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}
          />
        ) : (
          <SubmitBtn
            funcType="create"
            foodRationModalData={foodRationModalData}
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}

          />
        )}
        {
          deleteModal &&(
            <DeleteFoodRationModal foodRationModalData={foodRationModalData} deleteMod={handleDeleteModal} />
          )
        }
      </div>
    </div>
  );
};