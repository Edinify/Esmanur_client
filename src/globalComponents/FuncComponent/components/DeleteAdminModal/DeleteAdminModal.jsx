import { useDispatch } from "react-redux";
import { deleteAdminAction } from "../../../../redux/actions/adminsActions";
import { ADMINS_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";
const DeleteAdminModal = ({ deleteMod, data }) => {
  
  const dispatch = useDispatch();
  const deleteAdmin = (_id) => {
    dispatch(deleteAdminAction(_id));
    deleteMod(false)

  };

  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>{`Silmək istədiyinizə əminsiniz?`}</p>
        <div className="modal-btn">
          <button className="cancel-btn" onClick={() => deleteMod(false)}>
            Ləğv et
          </button>
          <button className="delete-btn" onClick={() =>{
             deleteAdmin(data._id)
             dispatch({type:ADMINS_MODAL_ACTION_TYPE.GET_ADMINS_MODAL,payload:{data:{},openModal:false}})
             }}>
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAdminModal;
