import { TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  return (
    <div className="text-red-400 text-3xl">
      <TextField label={t("hello")} variant="outlined" />
      <p className="text-red-500">{t("hello")}</p>
    </div>
  );
}

export default Login;
