import { useState, React } from "react";
import FuncComponent from "../../../../../globalComponents/FuncComponent/FuncComponent";
import moment from "moment";
import { useDispatch } from "react-redux";
import { EXPENSES_MODAL_ACTION_TYPE } from "../../../../../redux/actions-type";

const FoodRationCard = ({ data, mode, cellNumber, page }) => {
  const dispatch = useDispatch();
  const [deleteExpensesModal, setDeleteExpensesModal] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);

  const handleDeleteModal = () => {
    setDeleteExpensesModal(!deleteExpensesModal);
  };
  const handleUpdate = (data) => {
    const { category, amount, _id, appointment, date } = data;
    dispatch({
      type: EXPENSES_MODAL_ACTION_TYPE.GET_EXPENSES_MODAL,
      payload: {
        data: {
          category,
          amount,
          appointment,
          date,
          _id,
        },
        openModal: true,
      },
    });
  };

  const categoryData = [
    { key: "all", name: "Bütün kateqoriyalar" },
    { key: "food", name: "Qida" },
    { key: "cleaningSupplies", name: "Təmizlik ləvazimatları " },
    { key: "repair", name: "Təmir" },
    { key: "lease", name: "İcarə" },
    { key: "equipment", name: "Avadanlıq" },
    {key :"other",name:"Digər"}
  ];

  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              <div className="table-scroll-text">
                {data.category
                  ? categoryData.find((item) => item.key === data.category)
                      ?.name
                  : ""}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
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
          <td>
            <FuncComponent
              handleDeleteModal={handleDeleteModal}
              handleUpdate={handleUpdate}
              data={data}
              deleteExpensesModal={deleteExpensesModal}
              dataType="expenses"
            />
          </td>
        </tr>
      ) : (
        <div className="content-box">
          <div className="left">
            <h3>{data.fullName}</h3>
            <ul>
              <li>
                <span className="type">Kateqoriya:</span>
                <p>
                  {data.category
                    ? categoryData.find((item) => item.key === data.category)
                        ?.name
                    : ""}
                </p>
              </li>
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
          <div className="right">
            <FuncComponent
              handleDeleteModal={handleDeleteModal}
              handleUpdate={handleUpdate}
              data={data}
              deleteExpensesModal={deleteExpensesModal}
              dataType="expenses"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FoodRationCard;
