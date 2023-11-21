<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
>>>>>>> aytac
import { viewedAllNotifications } from "../../../../redux/actions/notificationsActions";
import { useState } from "react";
import NotificationModal from "../../../../globalComponents/Modals/NotificationModal/NotificationModal";
import { ReactComponent as NotificationIcon } from "../../../../assets/icons/header/bell-02.svg";
import { ReactComponent as NotificationBlueIcon } from "../../../../assets/icons/header/notification-blue-icon.svg";
import { ReactComponent as UserProfileIcon } from "../../../../assets/icons/header/user-02.svg";
import { ReactComponent as UserProfileBlueIcon } from "../../../../assets/icons/header/change-user-icon.svg";
import { ReactComponent as ChangePasswordIcon } from "../../../../assets/icons/password-check.svg";
import { ReactComponent as LogoutIcon } from "../../../../assets/icons/log-out-03.svg";
import { logoutAction } from "../../../../redux/actions/auth";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
>>>>>>> aytac
import { ChangePasswordModal } from "../../../../globalComponents/Header/ChangePasswordModal/ChangePasswordModal";
import { getBranchesAction } from "../../../../redux/actions/branchesActions";

const NavbarProfile = () => {
  const dispatch = useDispatch();
  const { branchesData, loading } = useSelector((state) => state.branchesData);
  const { user } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openNotModal, setOpenNotModal] = useState(false);
  const [changeNoficitaionIcon, setChangeNotificationIcon] = useState(false);
  const [changeUserIcon, setChangeUserIcon] = useState(false);
  const {user} = useSelector(state=>state.user)

  const navigateExit = () => {
    // window.location = "/login";
    // navigate("/login");
    dispatch(logoutAction());
  };

  window.onclick = function () {
    setIsOpen(false);
    setOpenNotModal(false);
    setChangeNotificationIcon(false);
    setChangeUserIcon(false);

    if (openNotModal) {
      dispatch(viewedAllNotifications());
    }
  };

  const handleActive = (e) => {
    setIsOpen(!isOpen);
    setOpenNotModal(false);
    setChangeUserIcon(!changeUserIcon);
    setChangeNotificationIcon(false);

    e.stopPropagation();
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    setIsOpen(false);
  };

  const handleNotOpenModal = (e) => {
    if (openNotModal) {
      dispatch(viewedAllNotifications());
    }
    setOpenNotModal(!openNotModal);
    setIsOpen(false);
    setChangeNotificationIcon(!changeNoficitaionIcon);
    setChangeUserIcon(false);
    e.stopPropagation();
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [openModal]);

    useEffect(() => {
    dispatch(getBranchesAction());
  }, []);


  return (
    <>
      <div className="main-nav-icons">
<<<<<<< HEAD
=======
        <h6 className="branch-name">filial: <span>{branchesData.find((item) => item._id === user?.branch)?.name}</span></h6>
        {userData?.role === "student" && (
          <div
            className="student-amount"
            onClick={() => {
              setChangeLessonAmountIcon(!changeLessonAmountIcon);
              setOpenLessonModal(!openLessonModal);
            }}
          >
            {changeLessonAmountIcon ? (
              <div className="change-student-lesson-icon">
                <StudentLessonBlueIcon />
              </div>
            ) : (
              <div className="student-lesson-icon">
                <StudentLessonIcon />
              </div>
            )}
          </div>
        )}
>>>>>>> aytac
        <div className="notification-con">
          <div
            className="notification-icon"
            onClick={(e) => handleNotOpenModal(e)}
          >
            {changeNoficitaionIcon ? (
              <div className="change-notif-icon">
                <NotificationBlueIcon />
              </div>
            ) : (
              <div className="notification-icon-head">
                <NotificationIcon />
              </div>
            )}
            <NotificationModal
              setOpenNotModal={setOpenNotModal}
              openNotModal={openNotModal}
              setChangeNotificationIcon={setChangeNotificationIcon}
            />
          </div>
        </div>

        <div className="profile-img-con">
          <div className="profile-img" onClick={(e) => handleActive(e)}>
            {changeUserIcon ? (
              <div className="change-user-icon">
                <UserProfileBlueIcon />
              </div>
            ) : (
              <div className="user-icon-head">
                <UserProfileIcon />
              </div>
            )}
          </div>
          <div className={`user-modal-con ${isOpen ? "active" : ""}`}>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="user-modal"
            >
              <div className="user-func">
                {user.role==="super-admin"
                ?
                <div className="password-change-func">
                <ChangePasswordIcon />
                <p onClick={handleOpenModal}>Şifrəni dəyiş</p>
              </div>
              :null
                }
                
              
                <div className="logout-func" onClick={navigateExit}>
                  <LogoutIcon />
                  <p>Çıxış</p>
                </div>
              </div>
            </div>

            <div className="user-modal-bg"></div>
          </div>
        </div>
      </div>
      {openModal && <ChangePasswordModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default NavbarProfile;
