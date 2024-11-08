const LogInBtn = () => {
    return (
      <>
        <button className="group relative px-4 py-2  rounded-2xl border border-gray-600 text-white">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
              Log in
            </div>
            <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
             Log in
            </div>
          </span>
        </button>
      </>
    )
  }
  
  export default LogInBtn
  