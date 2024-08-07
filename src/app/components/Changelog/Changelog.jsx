"use client";

const Changelog = ({ changelog }) => {
  const renderLog = (log) => {
    return log.changes.map((item, index) => (
      <li key={index} className="text-white text-2xl">
        &raquo; {item.value}
      </li>
    ));
  };

  return (
    <section className="bg-stone-900">
      <div className="container mx-auto">
        <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-16 pt-8 ">
          <h2 className="text-white text-3xl pl-4 mb-4">Log o'change:</h2>
          {changelog.map((log, index) => (
            <>
              <h3 className="text-white text-2xl mt-4 ml-4" key={index}>
                v{log.version}, applied on {log.applied}
              </h3>
              <ul className="ml-4 mb-8">{renderLog(log)}</ul>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Changelog;
