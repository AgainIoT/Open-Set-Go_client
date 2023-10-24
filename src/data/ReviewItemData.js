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

const prIcon = (props) => (
  <SvgIcon {...props}>
    <svg
      width="50"
      height="50"
      viewBox="0 0 30 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.9792 32.0827C27.7528 32.0827 28.4947 31.7754 29.0416 31.2284C29.5886 30.6814 29.8959 29.9396 29.8959 29.166C29.8959 28.3925 29.5886 27.6506 29.0416 27.1036C28.4947 26.5566 27.7528 26.2493 26.9792 26.2493C26.2057 26.2493 25.4638 26.5566 24.9169 27.1036C24.3699 27.6506 24.0626 28.3925 24.0626 29.166C24.0626 29.9396 24.3699 30.6814 24.9169 31.2284C25.4638 31.7754 26.2057 32.0827 26.9792 32.0827ZM8.02091 8.74935C8.79446 8.74935 9.53633 8.44206 10.0833 7.89508C10.6303 7.3481 10.9376 6.60623 10.9376 5.83268C10.9376 5.05913 10.6303 4.31727 10.0833 3.77029C9.53633 3.22331 8.79446 2.91602 8.02091 2.91602C7.24737 2.91602 6.5055 3.22331 5.95852 3.77029C5.41154 4.31727 5.10425 5.05913 5.10425 5.83268C5.10425 6.60623 5.41154 7.3481 5.95852 7.89508C6.5055 8.44206 7.24737 8.74935 8.02091 8.74935ZM8.02091 32.0827C8.79446 32.0827 9.53633 31.7754 10.0833 31.2284C10.6303 30.6814 10.9376 29.9396 10.9376 29.166C10.9376 28.3925 10.6303 27.6506 10.0833 27.1036C9.53633 26.5566 8.79446 26.2493 8.02091 26.2493C7.24737 26.2493 6.5055 26.5566 5.95852 27.1036C5.41154 27.6506 5.10425 28.3925 5.10425 29.166C5.10425 29.9396 5.41154 30.6814 5.95852 31.2284C6.5055 31.7754 7.24737 32.0827 8.02091 32.0827Z"
        stroke="#0C538B"
        strokeWidth="2.91667"
        strokeLinejoin="round"
      />
      <path
        d="M8.02087 8.74935V26.2493M17.5 7.29102H24.0625C24.8361 7.29102 25.578 7.59831 26.1249 8.14529C26.6719 8.69227 26.9792 9.43413 26.9792 10.2077V26.2493"
        stroke="#0C538B"
        strokeWidth="2.91667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.8751 11.666L17.5001 7.29102L21.8751 2.91602"
        stroke="#0C538B"
        strokeWidth="2.91667"
        strokeLinecap="round"
        strokeLinejoin="round"
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
