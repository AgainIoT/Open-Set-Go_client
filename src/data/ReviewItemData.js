import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GavelIcon from "@mui/icons-material/Gavel";
import GroupsIcon from "@mui/icons-material/Groups";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import SecurityIcon from "@mui/icons-material/Security";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import SvgIcon from "@mui/material/SvgIcon";

import styled from "styled-components";
const PRIcon = styled(SvgIcon)``;

const prIcon = (props) => (
  <SvgIcon {...props}>
    <svg
      width="134"
      height="153"
      viewBox="0 0 134 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.7042 47.4085C35.2434 47.4085 45.4085 37.2434 45.4085 24.7042C45.4085 12.165 35.2434 2 22.7042 2C10.165 2 0 12.165 0 24.7042C0 37.2434 10.165 47.4085 22.7042 47.4085ZM22.7324 33.9301C27.5552 33.9301 31.4648 30.0205 31.4648 25.1977C31.4648 20.375 27.5552 16.4653 22.7324 16.4653C17.9096 16.4653 14 20.375 14 25.1977C14 30.0205 17.9096 33.9301 22.7324 33.9301Z"
        fill="#0C538B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.7042 152.197C35.2434 152.197 45.4085 142.032 45.4085 129.493C45.4085 116.954 35.2434 106.789 22.7042 106.789C10.165 106.789 0 116.954 0 129.493C0 142.032 10.165 152.197 22.7042 152.197ZM22.8324 138.465C27.6552 138.465 31.5648 134.556 31.5648 129.733C31.5648 124.91 27.6552 121 22.8324 121C18.0096 121 14.1 124.91 14.1 129.733C14.1 134.556 18.0096 138.465 22.8324 138.465Z"
        fill="#0C538B"
      />
      <rect
        x="17.1665"
        y="43.9155"
        width="11.9496"
        height="69.8592"
        fill="#0C538B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.296 150.198C123.835 150.198 134 140.032 134 127.493C134 114.954 123.835 104.789 111.296 104.789C98.7563 104.789 88.5913 114.954 88.5913 127.493C88.5913 140.032 98.7563 150.198 111.296 150.198ZM111.432 136.466C116.255 136.466 120.165 132.556 120.165 127.733C120.165 122.911 116.255 119.001 111.432 119.001C106.61 119.001 102.7 122.911 102.7 127.733C102.7 132.556 106.61 136.466 111.432 136.466Z"
        fill="#0C538B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M104.7 42.7002C104.7 38.8342 101.566 35.7002 97.6997 35.7002H104.7V42.7002Z"
        fill="#0C538B"
      />
      <rect x="104.7" y="35.7002" width="13" height="76" fill="#0C538B" />
      <path
        d="M80.7002 22.6899H104.7C111.88 22.6899 117.7 28.5102 117.7 35.6899V35.6899H80.7002V22.6899Z"
        fill="#0C538B"
      />
      <rect
        x="58"
        y="28.6714"
        width="41.0026"
        height="16.0587"
        rx="8.02934"
        transform="rotate(-44.3673 58 28.6714)"
        fill="#0C538B"
      />
      <rect
        width="41.0026"
        height="16.0587"
        rx="8.02934"
        transform="matrix(0.714872 0.699255 0.699255 -0.714872 58 29.3291)"
        fill="#0C538B"
      />
    </svg>
  </SvgIcon>
);

export const templateItem = [
  {
    item: "issue",
    title: "ISSUE TEMPLATE",
    icon: WarningAmberIcon,
    desc: "Customize the templates that are available for contributors to use when they open new issues in your repository.",
    path: "/reviewIssue",
  },
  {
    item: "pr",
    title: "PR TEMPLATE",
    icon: prIcon,
    desc: "Using Pull-Request Template, project contributors will automatically see the template's contents in the pull request body.",
    path: "/reviewPR",
  },
  {
    item: "readme",
    title: "README.md",
    icon: InfoOutlinedIcon,
    desc: "README file tell other people why your project is useful, what they can do with your project, and how they can use it.",
    path: "/reviewReadme",
  },
  {
    item: "contributing",
    title: "CONTRIBUTING.md",
    icon: HandshakeOutlinedIcon,
    desc: "Guidelines to communicate how people should contribute to your project.",
    path: "/reviewContributing",
  },
];

export const communityItem = [
  {
    item: "description",
    title: "Description",
    icon: DescriptionIcon,
    desc: "This is a explanation used in Repository, which is the first item that is visible to the user, and is a concise description that best describes the topic.",
  },
  {
    item: "license",
    title: "License",
    icon: LockOutlinedIcon,
    desc: "Open source licenses are licenses that comply with the Open Source Definition – in brief, they allow software to be freely used, modified, and shared.",
  },
  {
    item: "conduct",
    title: "Code of Conduct",
    icon: GavelIcon,
    desc: "A code of conduct is a document that establishes expectations for behavior for your project’s participants.",
  },
  {
    item: "discussion",
    title: "Discussion",
    icon: GroupsIcon,
    desc: "Collaborative communication forum for the community around an open source or internal project.",
  },
];

export const securityItem = [
  {
    item: "codeql",
    title: "CodeQL",
    icon: DocumentScannerIcon,
    desc: "Automatically detect common vulnerability and coding errors",
  },
  {
    item: "secretScan",
    title: "Secret scanning",
    icon: VpnKeyIcon,
    desc: "Get notified when a secret is pushed to this repository",
  },
  {
    item: "securityPolicy",
    title: "Security Policy",
    icon: SecurityIcon,
    desc: "View how to securely report security vulnerabilities for this repository",
  },
  {
    item: "dependabot",
    title: "Dependabot alerts",
    icon: SmartToyIcon,
    desc: "Get notified when one of your dependencies has a vulnerability",
  },
];
