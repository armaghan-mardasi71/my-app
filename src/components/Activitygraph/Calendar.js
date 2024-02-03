import React from "react";
import "./Calendar.css";
// Import the calendarheatmap
import CalendarHeatmap from "react-calendar-heatmap";
// import "react-calendar-heatmap/dist/styles.css";
export default class calendar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // Some dates to render in the heatmap
      values: [
        { date: "2023-01-01", count: 45 },
        { date: "2023-03-22", count: 52 },
        { date: "2023-04-26", count: 35 },
        { date: "2023-05-4", count: 80 },
        { date: "2023-06-10", count: 52 },
        { date: "2023-09-18", count: 20 },
        { date: new Date(2024, 0, 1) }
      ],
      // How many days should be shown
      numDays: 365
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    console.log(value);
  }

  render() {
    return (
      <div
        style={{
          width: 900,
          height: 150,
          paddingRight: 10,
          paddingTop: 5,
          marginLeft: 19,
          border: "1px solid rgba(136, 134, 134, 0.3)",
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5
        }}
      >
        <CalendarHeatmap
          startDate={new Date("2023-01-01")}
          endDate={new Date("2024-01-01")}
          values={this.state.values}
          showWeekdayLabels="true"
          gutterSize={3}
        />
      </div>
    );
  }
}
