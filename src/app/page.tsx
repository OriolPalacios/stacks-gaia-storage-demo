"use client";

import { showConnect, AuthResponsePayload, disconnect } from "@stacks/connect";
import { userSession } from "@/lib/auth";
import { useState } from "react";
import { uploadMetadataNFT } from "@/lib/uploadNFT";

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

  const uploadMetadata = async () => {
    const metadata = document.getElementById("nft-metadata") as HTMLInputElement;
    const image = document.getElementById("nft-image") as HTMLInputElement;
    if (metadata.files && metadata.files[0] && image.files && image.files[0]) {
      await uploadMetadataNFT(metadata.files[0], image.files[0]);
    }
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await uploadMetadata();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <header className="flex justify-between items-center w-full p-4 absolute top-0 bg-gray-700">
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
            <p className={`my-2 border rounded p-2`}>{userData?.profile.stxAddress.testnet.slice(0, 5) + "..." + userData?.profile.stxAddress.testnet.slice(-5)}</p>
          </>
        )}
      </header>

      <form
        className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20"
        onSubmit={submitForm}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2 text-white" htmlFor="nft-metadata">
              NFT Metadata
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nft-metadata"
              type="file"
              accept="text/csv"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2 text-white" htmlFor="nft-image">
              NFT Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nft-image"
              type="file"
              accept="image/*"
            />
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
          type="submit"
        >
          Submit
        </button>
      </form>

    </div>
  );
}
