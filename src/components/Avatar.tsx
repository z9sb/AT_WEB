import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";


const AvatarComponent = ({user}) => {
  return (
    <Avatar sx={{ bgcolor: deepPurple[500], width: 64, height: 64 }}>
      {user.name
        .split(" ")
        .map((n) => n[0])
        .join("")}
    </Avatar>
  );
};

export default AvatarComponent;
