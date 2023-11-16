import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import FuncComponent from "../../../../../globalComponents/FuncComponent/FuncComponent";
import { FINE_MODAL_ACTION_TYPE } from "../../../../../redux/actions-type";
import MoreModal from "../../../../../globalComponents/MoreModal/MoreModal";

const FineCard = ({ data, mode, cellNumber, handleUpdate }) => {
  const dispatch = useDispatch();
  const [arrowUp, setArrowUp] = useState(false);
  const [deleteFineModal, setDeleteFineModal] = useState(false);
  const [openMoreModal, setOpenMoreModal] = useState(false);
  const fineTypeList = [
    { name: "Şifahi xəbərdarlıq", key: "verbalWarning" },
    { name: "Yazılı xəbərdarlıq", key: "writtenWarning" },
    { name: "Töhmət", key: "rebuke" },
    { name: "Şiddətli töhmət", key: "severeRebuke" },
  ];

  const handleDeleteModal = () => {
    setDeleteFineModal(!deleteFineModal);
  };
  const openMoreModalFunc = () => {
    handleUpdate(data, "more");
    setOpenMoreModal(true);
  };

  useEffect(() => {
    if (openMoreModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [openMoreModal]);

  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              <div className="table-scroll-text">{data?.teacher?.fullName}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            {data.fineType
              ? fineTypeList.find((item) => item.key === data.fineType)?.name
              : "boş"}
          </td>
          <td>
          <div className="td-con">
              <div className="table-scroll-text">{data.comment}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td className="date">
            {data.createdAt
              ? moment(data.createdAt).format("DD-MM-YYYY")
              : ""}
          </td>
          <td>
            <FuncComponent
              handleDeleteModal={handleDeleteModal}
              handleUpdate={handleUpdate}
              data={data}
              deleteFineModal={deleteFineModal}
            />
          </td>
        </tr>
      ) : (
       
             <div className="content-box">
               <div className="left">
                 <h3>{data.teacher.fullName}</h3>
                 <ul>
              <li>
                <span className="type">Cəza növü:</span>
                <p>
                  {data.fineType
                    ? fineTypeList.find((item) => item.key === data.fineType)
                        ?.name
                    : "boş"}
                </p>
              </li>
              <li>
                <span className="type">Rəy:</span>
                <p>{data.comment ? data.comment : "boş"}</p>
              </li>
              <li>
                <span className="type"> Tarix:</span>
                <p>
                  {data.createdAt
                    ? moment(data.createdAt).format("YYYY-MM-DD")
                    : "boş"}
                </p>
              </li>
            </ul>
                
               </div>
               <div className="right">
               <span  onClick={()=> openMoreModalFunc()}>
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <g id="Icons/Line/Arrows/chevron-right">
                       <path
                         id="Icon"
                         d="M9 18L15 12L9 6"
                         stroke="#717171"
                         strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       />
                     </g>
                   </svg>
                  </span>
            
                        {openMoreModal && (
               <MoreModal
                 handleUpdate={handleUpdate}
                 setOpenMoreModal={setOpenMoreModal}
                 type="fine"
                 data={data}
               />
             )}
               </div>
             </div>
       
      )}
    </>
  );
};

export default FineCard;
