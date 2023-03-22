import React from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react";

const ConnectButton = () => {
  const { setShowAuthFlow, handleLogOut } = useDynamicContext();

  const disconnect = async () => {
    try {
      handleLogOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowAuthFlow(true)}
        className="btn btn-sm border-none rounded-none bg-black text-white hover:bg-white hover:text-black"
      >
        Sign In
      </button>
      <button
        onClick={() => disconnect()}
        className="btn btn-sm border-none rounded-none bg-black text-white hover:bg-white hover:text-black"
      >
        Sign Out
      </button>
    </>
  );
};

export default ConnectButton;
