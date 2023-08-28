import { useState } from "react";

const useIndex = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  const handleSubscribe = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      setModalSuccess(true);
    }, 1500);
  };
  return {
    email,
    setEmail,
    handleSubscribe,
    loading,
    modalSuccess,
    setModalSuccess,
  };
};

export default useIndex;
