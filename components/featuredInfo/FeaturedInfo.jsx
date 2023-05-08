import React from "react";
import { BsFillFileArrowDownFill } from "react-icons/bs";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,454</span>
          <span className="featuredRate">
            -22.44 <BsFillFileArrowDownFill className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,454</span>
          <span className="featuredRate">
            -52.44 <BsFillFileArrowDownFill className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,454</span>
          <span className="featuredRate">
            2.44 <BsFillFileArrowDownFill className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
