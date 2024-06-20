import { CHANGELOG } from "../../constants/valhelsia";

const ChangelogValhelsia = () => {
  const renderLog = (log) => {
    return log.changes.map((item) => <li className="text-white text-2xl">&raquo; {item.value}</li>);
  };

  return (
    <>
      <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-16 pt-8 bg-stone-900">
        <h2 className="text-white text-3xl pl-4 mb-4">Log o'change:</h2>
        {CHANGELOG.map((log) => (
          <>
            <ul className="ml-4">{renderLog(log)}</ul>
          </>
        ))}
      </div>
    </>
  );
};

export default ChangelogValhelsia;
