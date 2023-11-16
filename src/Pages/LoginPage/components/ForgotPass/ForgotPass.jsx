import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField } from "@mui/material";
import {
  FORGET_PASSWORD_ACTIONS_TYPE,
} from "../../../../redux/actions-type";
import { sendToEmailAction } from "../../../../redux/actions/forgetPasswordAction";
import PreviewImg from "../PreviewImg/PreviewImg";
import { ReactComponent as LoginLogo } from "../../../../assets/icons/Login-Logo.svg";
import Loading from "../../../../globalComponents/Loading/Loading";
import { useCustomHook } from "../../../../globalComponents/GlobalFunctions/globalFunctions";

export const ForgotPass = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { changeShowNav } = useCustomHook();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const forgetPassword = useSelector((state) => state.forgetPassword);
  const { loading } = useSelector((state) => state.forgetPassword);

  const backNav = () => {
    navigate("/login");
  };
  const resetNav = () => {
    if (phoneNumber) {
      setErrorMessage("");

      dispatch(sendToEmailAction(phoneNumber));
    } else {
      dispatch({
        type: FORGET_PASSWORD_ACTIONS_TYPE.FORGET_ERROR,
        payload: "Mobil nömrənizi daxil edin",
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    changeShowNav(true)
    return () => {
      changeShowNav(false)
    };
  }, [dispatch]);

  return (
    <div className="login">
      <>
        <PreviewImg />
      </>
      <div className="login-right forgot ">
        <div className="login-right-header">
          <LoginLogo />
          <h2>Şifrəni unutmusunuz?</h2>
          <p>İki addımda şifrəni yenilə.</p>
        </div>
        {forgetPassword.error && (
          <div className="err-mess">{forgetPassword.error}</div>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "416px",
            display: "flex",
            flexDirection: "column",
            "@media (max-width: 550px)": {
              width: "100%",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{
              "& input": {
                fontSize: "16px",
              },
              marginTop: "20px",
              // "@media (max-width: 800px)": {
              //   width: "348px",
              // },
            }}
            label="Mobil nömrəniz"
            type="text"
            name="phoneNumber"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
            InputLabelProps={{
              style: {
                fontSize: "16px",
                color: "#3F3F3F",
                backgroundColor: "white",
              },
              // onFocus:{fontSize:"12px"}
            }}
          />
        </Box>
        <button onClick={resetNav} type="submit" className="login-btn">
          {loading ? <Loading mode="in-button" /> : "Şifrəni yenilə"}
        </button>

        <h6 className="back-btn" onClick={backNav}>
          Geri
        </h6>
      </div>
    </div>
  );
};
