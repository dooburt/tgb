import { CHANGELOG } from "../../constants/prominence";

const ChangelogProminence = () => {
  const renderLog = (log) => {
    return log.changes.map((item, index) => (
      <li key={index} className="text-base md:text-2xl text-white">
        &raquo; {item.value}
      </li>
    ));
  };

  return (
    <section className="bg-stone-900" id="changelog">
      <div className="container mx-auto md:w-2/3">
        <div className="mx-4 max-w-full py-6 pt-8 sm:mx-auto sm:px-6 lg:px-16 ">
          <h2 className="mb-4 pl-4 text-3xl text-white">Log o'change:</h2>
          {CHANGELOG.map((log, index) => (
            <div key={index}>
              <h3 className="ml-4 mt-4 text-lg md:text-2xl text-white" id={log.version}>
                v{log.version}, applied on {log.applied}
              </h3>
              <ul className="mb-8 ml-4">{renderLog(log)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChangelogProminence;
