import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminCard from "./AdminCard";
import { Pagination } from "antd";
import Loading from "../../../../globalComponents/Loading/Loading";
import MoreModal from "../../../../globalComponents/MoreModal/MoreModal";
import { ADMINS_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";

const AdminsData = ( ) => {
  const dispatch = useDispatch();
  const { admins, totalPages,loading } = useSelector((state) => state.adminsPagination);
  const [openMoreModal, setOpenMoreModal] = useState(false);
  const tableHead = [
    { id: 1, label: "Müəllim adı" },
    { id: 3, label: "Email" },
    { id: 7, label: "" },
  ];

  const handleUpdate = (data, modalType) => {
    const { fullName, email, password, _id, branch } = data;
    dispatch({
      type: ADMINS_MODAL_ACTION_TYPE.GET_ADMINS_MODAL,
      payload: {
        data: {
          fullName,
          email,
          password,
          _id,
          branch
        },
        openModal: modalType !== "more" ? true : false,
      },
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table className="details-table admin-table">
            <thead>
              <tr>
                {tableHead.map((head, i) => (
                  <th key={i}>{head.label}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {admins?.map((teacher, i) => (
                <AdminCard
                  handleUpdate={handleUpdate}
                  key={i}
                  data={teacher}
                  mode="desktop"
                  setOpenMoreModal={setOpenMoreModal}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet with-more">
            {admins?.map((teacher, i) => (
              <AdminCard
                setOpenMoreModal={setOpenMoreModal}
                handleUpdate={handleUpdate}
                key={i}
                data={teacher}
                mode="tablet"
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AdminsData;
