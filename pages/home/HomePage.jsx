import Chart from "@/components/CHART/Chart";
import FeaturedInfo from "@/components/featuredInfo/FeaturedInfo";
import WidgetLg from "@/components/widgetLg/WidgetLg";
import WidgetSmall from "@/components/widgetSmall/WidgetSmall";
import { UserData } from "@/DummyData";
import React from "react";

export default function index() {
  return (
    <div className="home">
      <FeaturedInfo />
      {/* <Chart
        data={UserData}
        title="User Analytics"
        grid
        dataKey="Active User"
      /> */}
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLg />
      </div>
    </div>
  );
}
