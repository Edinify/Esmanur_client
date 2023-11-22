import { useState } from "react";
import FuncComponent from "../../../../globalComponents/FuncComponent/FuncComponent";
const AdminCard = ({
  data,
  mode,
  cellNumber,
  setOpenMoreModal,
  handleUpdate,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };
  const openMoreModal = () => {
    handleUpdate(data, "more");
    setOpenMoreModal(true);
  };

  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              {/* <div className="cell-number">{cellNumber}.</div> */}
              <div className="table-scroll-text">{data.fullName}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td className="email">
            <div className="td-con">
              <div className="table-scroll-text">{data.email}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <FuncComponent
              handleDeleteModal={handleDeleteModal}
              handleUpdate={handleUpdate}
              data={data}
              deleteAdminModal={deleteModal}
            />
          </td>
        </tr>
      ) : (
        <div className="content-box admin">
          <div className="left">
            <h3>{data.fullName}</h3>
            <ul>
              <li className="email">
                <span className="type">Email:</span>
                <p>{data.email ? data.email : "boş"}</p>
              </li>
            </ul>
          </div>
          <div className="right">
          <FuncComponent
              handleDeleteModal={handleDeleteModal}
              handleUpdate={handleUpdate}
              data={data}
              deleteAdminModal={deleteModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminCard;
