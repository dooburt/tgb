"use client";

import React, { useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import modpacks from "@/app/constants/modpacks";

dayjs.extend(relativeTime);

const ServerStatus = ({ packId = "prominence", bg = "bg-blue-800" }) => {
  const pack = modpacks.find((pack) => pack.id === packId);

  if (!pack) return null;
  if (!pack.active)
    return (
      <div className="w-full flex justify-center items-center">
        <span>Server status isn't available. Check Discord for more information</span>
      </div>
    );

  let [loading, setLoading] = useState(true);
  let [serverData, setServerData] = useState(null);
  let [error, setError] = useState(null);

  useInterval(async () => {
    setLoading(true);
    console.log("Fetching status of", pack.status);
    fetch(pack.status)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setServerData(data);
        setLoading(false);
      })
      .catch((err) => {
        setServerData(null);
        setLoading(false);
        setError(err);
      });
  }, 30000);

  const renderLoading = () => {
    return (
      <section className={`body-font ${bg} text-gray-200 min-h-[300px]`}>
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24 md:w-2/3">
          <svg class="animate-spin -ml-1 mr-3 mb-4 h-[50px] w-[50px] text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>

          <div className="font-body ml-2 text-2xl inline-block">We're figuring things out...</div>
        </div>
      </section>
    );
  };

  const renderError = () => {
    return (
      <section className={`body-font ${bg} text-gray-200`}>
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:w-2/3 md:flex-row">
          <div className="mb-6 flex w-full flex-col pr-0 text-center md:mb-0 md:w-auto md:pr-10 md:text-left">
            <h2 className="font-body text-1xl title-font mb-1 font-medium tracking-widest text-indigo-200">Something is borked. No status at the moment :(</h2>
          </div>
        </div>
      </section>
    );
  };

  if (loading) return renderLoading();
  if (error) return renderError();

  const renderOnlineTitle = () => {
    return (
      <span className="uppercase font-header">
        THE GREAT BEYOND {pack.name} SERVER IS <span className="text-green-400">ONLINE</span>
        <img src="https://cdn3.emoji.gg/emojis/1053-getrickrolled.gif" alt="GetRickRolled" className="inline h-[20px] ml-2 -top-1 relative" />
      </span>
    );
  };

  const renderOfflineTitle = () => {
    return (
      <span className="uppercase font-header">
        THE GREAT BEYOND {pack.name} SERVER IS <span className="text-red-600">OFFLINE - RIP</span>
      </span>
    );
  };

  const renderPlayers = () => {
    return (
      <>
        <h3 className="font-header text-lg">
          Adventurers ({serverData.players.online}/{serverData.players.max})
        </h3>
        {serverData.players.list.map((player) => {
          return (
            <div>
              <img src={`https://mc-heads.net/avatar/${player.uuid}/50`} alt={player.name_clean} className="w-[20px] h-[20px] -top-1 inline relative mr-2" />
              <span className="font-body text-lg">{player.name_clean}</span>
            </div>
          );
        })}
      </>
    );
  };

  const renderOffline = () => {
    return (
      <>
        <span className="font-body">Check Discord for more information</span>
      </>
    );
  };

  const renderMeta = () => {
    return (
      <div className="mt-8">
        <span className="font-body text-sm text-blue-500">Last checked {dayjs().to(dayjs(serverData.retrievedAt))}</span>
      </div>
    );
  };

  return (
    <section className={`font-body ${bg} text-gray-200 min-h-[300px]`} id="status">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:w-2/3 md:flex-row">
        <div className="mb-6 flex w-full flex-col pr-0 text-center md:mb-0 md:w-auto md:pr-10 md:text-left">
          <h2 className="text-2xl title-font mb-1 font-medium text-indigo-200">{serverData.online ? renderOnlineTitle() : renderOfflineTitle()}</h2>

          {serverData.online ? renderPlayers() : renderOffline()}
          {serverData.online ? renderMeta() : null}
        </div>
      </div>
    </section>
  );
};

export default ServerStatus;
