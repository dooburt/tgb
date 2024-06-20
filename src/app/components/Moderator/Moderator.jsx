"use client";

const Moderator = ({ modpack, moderators }) => {
  return (
    <section className="font-body text-gray-600 bg-slate-800">
      <div className="w-full py-32">
        <section>
          <div className="text-center">
            <h1 className="font-header text-4xl font-medium text-white mb-4">Modpack staff</h1>
            {moderators.map((moderator, index) => {
              return (
                <p className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-200 px-4" key={index}>
                  {moderator.name}
                </p>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Moderator;
