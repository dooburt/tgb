"use client";

import { CardHeader, CardBody } from "@material-tailwind/react";

const StaffMember = ({ handle, image, tagline, servers, discordId }) => {
  return (
    <>
      <a href={`discord://-/users/${discordId}`} className="grow">
        <div className="relative w-full min-w-64 min-h-[150px] flex flex-col bg-clip-border rounded-xl overflow-hidden shadow-md bg-deep-purple-900 hover:transform hover:scale-105 transition-all hover:cursor-pointer">
          <div className="absolute w-full h-full z-10 right-0 top-0 left-0 bottom-0 bg-blue-gray-900 overflow-hidden">
            <img src={image} alt={`${handle}'s profile picture`} className="object-cover h-full w-full blur-md" />
          </div>

          <div className="relative z-20">
            <CardHeader floated={false} className="h-80">
              <img src={image} alt={`${handle}'s profile picture`} className="object-cover h-full w-full" />
            </CardHeader>
            <CardBody className="">
              <span className="font-header text-3xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">@{handle}</span>
              {/* <p>{tagline}</p> */}
              <div className="mt-4 flex gap-2 flex-wrap">
                {servers.map((server, index) => {
                  return (
                    <div key={index} className="rounded-lg border-2 border-white text-center text-white px-2 py-1 inline-block">
                      <span className="font-body">{server}</span>
                    </div>
                  );
                })}
              </div>
            </CardBody>
          </div>
        </div>
      </a>
    </>
  );
};

export default StaffMember;
