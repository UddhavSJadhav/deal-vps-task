const Navbar = () => {
  return (
    <header>
      <nav className="h-16 border border-solid border-b-gray-300 p-2 flex justify-center items-center">
        <div className="text-3xl font-extrabold">
          <span className="bg-[linear-gradient(120deg,#e81c4b,#4beced)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            DEAL-VPS
          </span>
          <span className="italic [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#1b0307] text-transparent">
            {" "}
            TASK
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
