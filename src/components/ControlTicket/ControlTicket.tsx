import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { LuMail } from "react-icons/lu";
import { LuMailPlus } from "react-icons/lu";
import { TbMailFast } from "react-icons/tb";
import { TbMailCheck } from "react-icons/tb";
import { getTickets } from "../../services/database.js";
import { CardTicket } from "../CardTicket/CardTicket";

const LabTabsTicket = () => {
  const [value, setValue] = React.useState("1");
  const [tickets, setTickets] = React.useState([]);

  React.useEffect(() => {
    const fetchTickets = async () => {
      const result = await getTickets();
      setTickets(result);
    };

    fetchTickets();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="inherit"
            indicatorColor=""
            sx={{
              fontFamily: "Poppins",
              fontSize: "12px",
              textTransform: "none",
            }}
          >
            <Tab
              label="Todos"
              value="1"
              icon={<LuMail size={15} />}
              iconPosition="start"
              sx={{
                fontSize: "14px",
                textTransform: "none",
                fontWeight: 500,
                fontFamily: "Montserrat",
                marginRight: "20px",
              }}
            />
            <Tab
              label="Novos Tickets"
              icon={<LuMailPlus size={15} />}
              iconPosition="start"
              value="2"
              sx={{
                fontSize: "14px",
                textTransform: "none",
                fontWeight: 500,
                fontFamily: "Montserrat",
                marginRight: "20px",
              }}
            />
            <Tab
              label="Em andamento"
              value="3"
              icon={<TbMailFast size={22} />}
              iconPosition="start"
              sx={{
                fontSize: "14px",
                textTransform: "none",
                fontWeight: 500,
                fontFamily: "Montserrat",
                marginRight: "20px",
              }}
            />
            <Tab
              label="Encerrados"
              value="4"
              icon={<TbMailCheck size={17} />}
              iconPosition="start"
              sx={{
                fontSize: "14px",
                textTransform: "none",
                fontWeight: 500,
                fontFamily: "Montserrat",
                marginRight: "20px",
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          {tickets.slice(-2).map((item) => (
            <CardTicket key={item.id} ticket={item} />
          ))}
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default LabTabsTicket;
