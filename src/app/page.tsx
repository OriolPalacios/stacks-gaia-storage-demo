"use client";

import { showConnect, disconnect, UserData, AuthResponsePayload } from "@stacks/connect";
import { userSession } from "./Wallet";
import { useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState<UserData | AuthResponsePayload | null>(null);
  const login = () => {
    showConnect({
      appDetails: {
        name: 'My App',
        icon: window.location.origin + '/my-app-logo.svg',
      },
      redirectTo: '/',
      onFinish: (payload) => {
        setUserData(payload.authResponsePayload);
      },
      userSession,
    });
  };
  const logout = () => {
    disconnect();
    window.location.reload();
  }
  return (
    <div>
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
        <p className={`my-2`}>{userData?.profile.stxAddress.testnet.slice(0, 5) + "..." + userData?.profile.stxAddress.testnet.slice(-5)}</p>
      )}
    </div>
  );
}
