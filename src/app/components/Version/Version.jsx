"use client";

const Version = ({ minecraft, modpack, loader, loaderVersion }) => {
  return (
    <section className=" bg-stone-900">
      <div className="container mx-auto md:w-2/3">
        <div className="mx-4 max-w-full py-6 pt-8 sm:mx-auto sm:px-4 lg:px-4">
          <h2 className="pl-4 text-3xl text-white pb-8 md:pb-0">We&apos;re rocking the following versions:</h2>
          <div className="sm:flex sm:space-x-4">
            <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bg-slate-900 text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
              <div className="bg-slate-800 p-5">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:ml-2 sm:mt-0 sm:text-left">
                    <h3 className="text-sm font-medium uppercase leading-6 text-indigo-200">Minecraft</h3>
                    <p className="text-3xl font-bold text-white">{minecraft}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bg-slate-900 text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
              <div className="bg-slate-800 p-5">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:ml-2 sm:mt-0 sm:text-left">
                    <h3 className="text-sm font-medium uppercase leading-6 text-indigo-200">Modpack</h3>
                    <p className="text-3xl font-bold text-white">{modpack}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bg-slate-900 text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
              <div className="bg-slate-800 p-5">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:ml-2 sm:mt-0 sm:text-left">
                    <h3 className="text-sm font-medium uppercase leading-6 text-indigo-200">{loader || "Fabric"}</h3>
                    <p className="text-3xl font-bold text-white">{loaderVersion}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Version;
