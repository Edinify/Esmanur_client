import { useDispatch } from "react-redux";
import { FOOD_RATİON_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";
import { deleteFoodRationAction } from "../../../../redux/actions/foodRationAction";
const DeleteFoodRationModal = ({
  deleteMod,
  data,
  foodRationModalData,
  type,
}) => {
  const dispatch = useDispatch();
  const deleteFoodRation = (_id) => {
    dispatch(deleteFoodRationAction(_id));
    deleteMod(false);
  };

  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>{"Silmək istədiyinizə əminsiniz?"}</p>
        {type === "expenses" ? (
          <div className="modal-btn">
            <button className="cancel-btn" onClick={() => deleteMod(false)}>
              Ləğv et
            </button>
            <button
              className="delete-btn"
              onClick={() => {
                deleteFoodRation(foodRationModalData._id);
                dispatch({
                  type: FOOD_RATİON_MODAL_ACTION_TYPE.GET_FOOD_RATİON_MODAL,
                  payload: { data: {}, openModal: false },
                });
              }}
            >
              Sil
            </button>
          </div>
        ) : (
          <div className="modal-btn">
            <button className="cancel-btn" onClick={() => deleteMod(false)}>
              Ləğv et
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteFoodRation(data._id)}
            >
              Sil
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteFoodRationModal;
