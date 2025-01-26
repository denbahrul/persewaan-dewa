import { CSSProperties } from "react";
import { HashLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loading() {
  return (
    <div className="m-auto flex max-w-screen-xl flex-col p-4 pt-24">
      <div className="m-auto mt-[20%] flex flex-col items-center justify-center">
        <HashLoader
          color={"#111111"}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="pt-10 text-lg">Loading . . .</p>
      </div>
    </div>
  );
}
