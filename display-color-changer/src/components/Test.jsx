import React from "react";
function Test({ colorSend }) {
  let arr = [
    "bg-red-700",
    "bg-red-200",
    "bg-amber-300",
    "bg-zinc-500",
    "bg-sky-800",
    "bg-rose-100",
    "bg-amber-800",
    "bg-amber-500",
    "bg-cyan-400",
  ];

  function handelbtn() {
    let random = Math.floor(Math.random() * arr.length);
    colorSend(arr[random]);
  }

  return (
    <>
      <div className="container p-1 w-70 flex flex-col justify-center items-center gap-4 text-center bg-blue-500 rounded-2xl">
        <h1>click Below Button</h1>
        <button
          onClick={handelbtn}
          className="bg-sky-200 text-emerald-950 px-2 py-1 rounded-full active:scale-90 hover:bg-sky-800 hover:text-zinc-950"
        >
          Click Here
        </button>
      </div>
    </>
  );
}

export default Test;
