import styled from "styled-components";
import { COLOR } from "../../styles/color";
import DescriptionIcon from "@mui/icons-material/Description";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GavelIcon from "@mui/icons-material/Gavel";
import GroupsIcon from "@mui/icons-material/Groups";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SecurityIcon from "@mui/icons-material/Security";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PR from "../../assets/icons/pullrequest.svg";

const PRIcon = styled.img`
  width: 8rem;
  height: 8rem;
  color: ${COLOR.MAIN_NAVY};
`;

const issueIcon = (
  <WarningAmberIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "8rem" }} />
);
const contributingIcon = (
  <HandshakeOutlinedIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "8rem" }} />
);
const readmeIcon = (
  <InfoOutlinedIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "8rem" }} />
);
const prIcon = <PRIcon src={PR} />;
const descIcon = (
  <DescriptionIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "8rem" }} />
);
const conductIcon = (
  <GavelIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "8rem" }} />
);
const discussionIcon = (
  <GroupsIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "8rem" }} />
);
const licenseIcon = (
  <LockOutlinedIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "8rem" }} />
);
const dependIcon = (
  <SmartToyIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "8rem" }} />
);
const codescanIcon = (
  <DocumentScannerIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "8rem" }} />
);
const secretIcon = (
  <NotificationsActiveIcon
    style={{ color: COLOR.MAIN_NAVY, fontSize: "8rem" }}
  />
);
const securityIcon = (
  <SecurityIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "8rem" }} />
);
const icons = [issueIcon,
  contributingIcon,
  readmeIcon,
  prIcon,
  descIcon,
  conductIcon,
  discussionIcon,
  licenseIcon,
  dependIcon,
  codescanIcon,
  secretIcon,
  securityIcon];

export default icons;
