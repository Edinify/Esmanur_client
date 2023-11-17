import React, { useEffect } from "react";
import "./notificationModal.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotificationsAdminAction,
  viewedAllNotifications,
} from "../../../redux/actions/notificationsActions";
import "moment/locale/az";
import SuperAdminNotification from "./components/SuperAdminNotification/SuperAdminNotification";
import AdminNotification from "./components/AdminNotification/AdminNotification";
const NotificationModal = ({
  openNotModal,
  setOpenNotModal,
  setChangeNotificationIcon,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (token && openNotModal) {
      if (user.role === "admin") {
        dispatch(getNotificationsAdminAction());
      } else if (user.role === "super-admin") {
        dispatch(getNotificationsAdminAction());
      }
      return () => {
        dispatch(viewedAllNotifications());
      };
    }
  }, [user, openNotModal, dispatch]);

  return (
    <>
      {user.role === "admin" && (
        <AdminNotification
          openNotModal={openNotModal}
          setOpenNotModal={setOpenNotModal}
          setChangeNotificationIcon={setChangeNotificationIcon}
        />
      )}

      {user.role === "super-admin" && (
        <SuperAdminNotification
          openNotModal={openNotModal}
          setOpenNotModal={setOpenNotModal}
          setChangeNotificationIcon={setChangeNotificationIcon}
        />
      )}
    </>
  );
};

export default NotificationModal;
