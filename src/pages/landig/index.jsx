import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import BankCheck from "../../assets/images/bank-check.png";
function Landing() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full bg-[#1B1B1B] px-6 justify-between">
      <header className="w-full h-1/5 flex items-center justify-between">
        <Button variant="contained">{t("login-or-signup")}</Button>

        <p className="text-3xl text-white text-bold">{t("system-name")}</p>

        <Button sx={{ bgcolor: "#232323", color: "white" }} variant="contained">
          {t("contact-us")}
        </Button>
      </header>

      <main className="w-full h-4/5 flex flex-col gap-8 pt-12">
        <div className="w-full flex items-center">
          <div className="w-1/3">
            <img />
          </div>

          <div className="w-1/3">
            <img />
          </div>

          <div className="w-1/3 flex flex-col items-center gap-4">
            <img src={BankCheck} className="w-[537px] h-[270px] " />
            <Button
              variant="contained"
              sx={{
              
                height: 60,
                fontSize: 24,
                alignSelf: "center",
              }}
            >
              {t("upload-bank-check-image")}
            </Button>
          </div>
        </div>

        <div>
          <h2></h2>

          <div>
            {[].map((feature, index) => (
              <div key={index}>
                <p></p>
                <p></p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
