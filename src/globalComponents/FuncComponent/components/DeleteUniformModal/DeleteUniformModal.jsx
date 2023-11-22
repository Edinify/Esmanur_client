import { useDispatch } from "react-redux";
import { UNIFORMS_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";
import { deleteUniformAction } from "../../../../redux/actions/uniformsAction";
const DeleteUniformModal = ({
  deleteMod,
  data,
  uniformModalData,
  type,
}) => {
  const dispatch = useDispatch();
  const deleteUniform = (_id) => {
    dispatch(deleteUniformAction(_id));
    deleteMod(false);
    if (type !== "out-modal") {
      dispatch({
        type: UNIFORMS_MODAL_ACTION_TYPE.GET_UNIFORMS_MODAL,
        payload: { data: {}, openModal: false },
      });
    }
  };

  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>Silmək istədiyinizə əminsiniz?</p>
        <div className="modal-btn">
          <button className="cancel-btn" onClick={() => deleteMod(false)}>
            Ləğv et
          </button>
          <button
            className="delete-btn"
            onClick={() =>
              deleteUniform(
                type !== "out-modal" ? uniformModalData._id : data._id
              )
            }
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUniformModal;
