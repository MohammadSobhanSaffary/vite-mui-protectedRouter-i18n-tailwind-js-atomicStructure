import { useEffect, useState } from "react";

function useValidation() {
  // STATES //
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //   METHODS  //
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  // EFFECTS //
  useEffect(() => {
    if (username.trim().length === 0) {
      setUsernameError();
    }
  }, [username]);

  useEffect(() => {
    if (password.trim().length === 0) {
      setPasswordError();
    } else if (password.trim().length < 5) {
      setPasswordError();
    }
  }, [password]);

  return {
    username,
    handleUsernameChange,
    usernameError,
    password,
    handlePasswordChange,
    passwordError,
  };
}

export default useValidation;
