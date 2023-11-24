import React from "react";
import moment from "moment";
import { useState } from "react";
import FuncComponent from "../../../../../globalComponents/FuncComponent/FuncComponent";
import { useDispatch, useSelector } from "react-redux";
import { INCOMES_MODAL_ACTION_TYPE } from "../../../../../redux/actions-type";

const IncomesCard = ({ data, mode, cellNumber, page }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [deleteIncomesModal, setDeleteIncomesModal] = useState(false);

  const handleDeleteModal = () => {
    setDeleteIncomesModal(!deleteIncomesModal);
  };
  const handleUpdate = (data) => {
    const { _id, appointment, amount, date, branch } = data;
    dispatch({
      type: INCOMES_MODAL_ACTION_TYPE.GET_INCOMES_MODAL,
      payload: {
        data: {
          _id,
          appointment,
          amount,
          date,
          branch,
        },
        openModal: true,
      },
    });
  };

  const categoryData = [
    { key: "all", name: "Bütün kateqoriyalar" },
    { key: "tuitionFees", name: "Təhsil haqqı" },
    { key: "other", name: "Digər" },
  ];
  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">{data.appointment}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>{data.amount}</td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">
                {data.date ? moment(data.date).format("DD-MM-YYYY") : ""}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          {user.role === "super-admin" && (
            <td className="more-options">
              <FuncComponent
                handleDeleteModal={handleDeleteModal}
                handleUpdate={handleUpdate}
                data={data}
                deleteIncomesModal={deleteIncomesModal}
                dataType="incomes"
              />
            </td>
          )}
        </tr>
      ) : (
        <div className="content-box">
          <div className="left">
            <h3>{data.fullName}</h3>
            <ul>
              <li>
                <span className="type">Təyinat:</span>
                <p>{data.appointment ? data.appointment : "boş"}</p>
              </li>
              <li className="payment">
                <span className="type">Məbləği:</span>
                <p>{data.amount ? data.amount : "boş"}</p>
              </li>
              <li>
                <span className="type"> Tarix:</span>
                <p>
                  {data.date ? moment(data.date).format("YYYY-MM-DD") : "boş"}
                </p>
              </li>
            </ul>
          </div>
          {user.role === "super-admin" && (
            <div className="right">
              <FuncComponent
                handleDeleteModal={handleDeleteModal}
                handleUpdate={handleUpdate}
                data={data}
                deleteIncomesModal={deleteIncomesModal}
                dataType="incomes"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default IncomesCard;
