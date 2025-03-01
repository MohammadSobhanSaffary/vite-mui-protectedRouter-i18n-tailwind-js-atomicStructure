import { Button, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import useValidation from "../../hooks/useValidation";

function Login() {
  const { t } = useTranslation();

  const {
    username,
    handleUsernameChange,
    usernameError,
    password,
    handlePasswordChange,
    passwordError,
  } = useValidation();

  function handleLoginSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="w-full h-full bg-[#1B1B1B] text-white flex justify-center items-center">
      <form
        onSubmit={handleLoginSubmit}
        className="p-4 flex flex-col justify-center items-center gap-8 shadow-md shadow-gray-300 bg-gray-400"
      >
        <h1 className="text-xl">{t("system-name")}</h1>

        <TextField
          value={username}
          onChange={handleUsernameChange}
          label={t("username")}
          helperText={usernameError}
          variant="outlined"
          className="w-80"
        />

        <TextField
          value={password}
          onChange={handlePasswordChange}
          label={t("password")}
          helperText={passwordError}
          variant="outlined"
          type="password"
          className="w-80"
        />

        <Button type="submit" variant="contained" className="w-80 h-[61.75px]">
          {t("login")}
        </Button>

      </form>
      
    </div>
  );
}

export default Login;
