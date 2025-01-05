"use client";

import { showConnect, AuthResponsePayload, disconnect } from "@stacks/connect";
import { userSession } from "@/lib/auth";
import { useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState<AuthResponsePayload | null>(null);
  const login = () => {
    showConnect({
      userSession,
      appDetails: {
        name: 'Demo',
        icon: '',
      },
      redirectTo: '/',
      onFinish: (payload) => {
        setUserData(payload.authResponsePayload);
      },
    });
  };
  const logout = () => {
    disconnect();
    window.location.reload();
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {userData === null ? (
        <button className="border m-2 p-2 rounded" onClick={login}>
          <span>Log in</span>
        </button>
      ) : (
        <button className="border m-2 p-2 rounded" onClick={logout}>
          <span>Log out</span>
        </button>
      )
      } 
      {userData && (
        <>
          <p className={`my-2`}>Testnet: {userData?.profile.stxAddress.testnet.slice(0, 5) + "..." + userData?.profile.stxAddress.testnet.slice(-5)}</p>
        </>
      )}
    </div>
  );
}
