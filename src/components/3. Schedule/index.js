import React from "react";
import { ScheduleWrapper } from "./ScheduleElements";
import { Container, HeadingH1 } from "../Commons";
import CustomizedTimeline from "./Timeline";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import TabPanel from "./Tabpanel.js";
import data from "../../data/data.js";

const useStyles = makeStyles((theme) => ({
  tab: { color: "#fff" },
}));

const Schedule = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container id="schedule">
        <HeadingH1>Schedule</HeadingH1>

        {/* Tabs  */}

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          className={classes.tab}
        >
          <Tab label="Day One" />
          <Tab label="Day Two" />
        </Tabs>

        <TabPanel value={value} index={0}>
          {/* DAY ONE */}
          <ScheduleWrapper>
            <CustomizedTimeline data={data[0]} />
          </ScheduleWrapper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* DAY TWO */}
          <ScheduleWrapper>
            <CustomizedTimeline data={data[1]} />
          </ScheduleWrapper>
        </TabPanel>

        {/* <ScheduleWrapper>
          <CustomizedTimeline />
        </ScheduleWrapper> */}
      </Container>
    </>
  );
};

export default Schedule;
