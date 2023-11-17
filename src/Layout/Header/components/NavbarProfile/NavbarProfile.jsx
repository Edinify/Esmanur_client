import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { viewedAllNotifications } from "../../../../redux/actions/notificationsActions";
import { useState } from "react";
import NotificationModal from "../../../../globalComponents/Modals/NotificationModal/NotificationModal";
import { ReactComponent as NotificationIcon } from "../../../../assets/icons/header/bell-02.svg";
import { ReactComponent as NotificationBlueIcon } from "../../../../assets/icons/header/notification-blue-icon.svg";
import { ReactComponent as UserProfileIcon } from "../../../../assets/icons/header/user-02.svg";
import { ReactComponent as UserProfileBlueIcon } from "../../../../assets/icons/header/change-user-icon.svg";
import { ReactComponent as ChangePasswordIcon } from "../../../../assets/icons/password-check.svg";
import { ReactComponent as LogoutIcon } from "../../../../assets/icons/log-out-03.svg";
import { ReactComponent as StudentLessonIcon } from "../../../../assets/icons/student-home/book-open-01.svg";
import { ReactComponent as StudentLessonBlueIcon } from "../../../../assets/icons/student-home/book-open-02.svg";
import { logoutAction } from "../../../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { ChangePasswordModal } from "../../../../globalComponents/Header/ChangePasswordModal/ChangePasswordModal";

const NavbarProfile = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openNotModal, setOpenNotModal] = useState(false);
  const [openLessonModal, setOpenLessonModal] = useState(false);
  const [changeNoficitaionIcon, setChangeNotificationIcon] = useState(false);
  const [changeLessonAmountIcon, setChangeLessonAmountIcon] = useState(false);
  const [changeUserIcon, setChangeUserIcon] = useState(false);
  const inputRef = useRef(null);
  const userData = JSON.parse(localStorage.getItem("userData"));

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
    setOpenLessonModal(false);

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
    setOpenLessonModal(false);
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [openModal]);

  return (
    <>
      <div className="main-nav-icons">
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
                <div className="password-change-func">
                  <ChangePasswordIcon />
                  <p onClick={handleOpenModal}>Şifrəni dəyiş</p>
                </div>
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
