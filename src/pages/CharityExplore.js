import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import DonationHistoryContainer from "../components/DonationHistoryContainer";

const CharityExplore = () => {
  const navigate = useNavigate();

  const onFrameContainer5Click = useCallback(() => {
    navigate("/charity-accept-donation");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[800px] flex flex-col items-start justify-start">
      <Header individualName="Charity" />
      <div className="self-stretch my-0 mx-[!important] absolute top-[728px] left-[0px] flex flex-row py-2.5 px-[50px] items-start justify-between z-[1] border-t-[1px] border-solid border-gray-200">
        <div className="rounded-xxs bg-white flex flex-row p-2.5 items-center justify-center">
          <div className="overflow-hidden flex flex-row items-start justify-start">
            <img
              className="relative w-8 h-8 shrink-0"
              alt=""
              src="../vector.svg"
            />
          </div>
        </div>
        <div className="rounded-xxs bg-white flex flex-row p-2.5 items-start justify-start">
          <div className="overflow-hidden flex flex-row items-start justify-start">
            <img
              className="relative w-8 h-8 shrink-0"
              alt=""
              src="../vector29.svg"
            />
          </div>
        </div>
        <div className="rounded-xxs bg-white flex flex-row p-2.5 items-start justify-start">
          <div className="overflow-hidden flex flex-col py-0 px-1 items-center justify-start gap-[3px]">
            <img
              className="relative w-4 h-4 shrink-0"
              alt=""
              src="../vector2.svg"
            />
            <img
              className="relative w-6 h-[13.33px] shrink-0"
              alt=""
              src="../vector3.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col py-2.5 px-5 items-start justify-start z-[2]">
        <DonationHistoryContainer
          pastDonationsText="Explore"
          propPadding="var(--padding-sm) 0px 0px"
          propBoxSizing="border-box"
          propAlignSelf="unset"
          propCursor="pointer"
          onFrameContainer5Click={onFrameContainer5Click}
        />
      </div>
      <div className="absolute my-0 mx-[!important] top-[796px] left-[10px] bg-white w-[340px] h-px shrink-0 overflow-hidden z-[3]" />
    </div>
  );
};

export default CharityExplore;
