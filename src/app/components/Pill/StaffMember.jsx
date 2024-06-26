import Avatar from "../Avatar/Avatar";

const StaffMemberPill = ({ label, avatar }) => {
  return (
    <>
      <div className="rounded-lg border-2 bg-white/80 hover:bg-purple-500 hover:text-white hover:border-purple-300 border-gray-700 text-center text-gray-900 px-2 py-1 flex flex-row">
        {avatar ? <Avatar img={avatar} width={20} height={20} /> : null}
        <span className="font-body pl-2">{label}</span>
      </div>
    </>
  );
};

export default StaffMemberPill;
