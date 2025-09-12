function Msg_confirm({handler_func}) {

    function handle_submit(){
        handler_func()
    }
    return (  
        <div className="m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-md border border-slate-200">
        <div className="flex shrink-1 items-center pb-4 text-md sm:text-xl font-medium text-slate-800">
          Confirmation
        </div>
        <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
          Your form has been submitted successfully 🎉
        </div>
        <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
          <button onClick={handle_submit}
            className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 active:bg-green-700 ml-2"
            type="button"
          >
            Back
          </button>
        </div>
      </div>




    );
}

export default Msg_confirm;