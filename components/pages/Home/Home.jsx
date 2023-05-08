import React from "react";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import Chart from "../../CHART/Chart";
import { UserData } from "../../DummyData";
import WidgetSmall from "../../widgetSmall/WidgetSmall";
import WidgetLg from "../../widgetLg/WidgetLg";

const home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={UserData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLg />
      </div>
    </div>
  );
};

export default home;
