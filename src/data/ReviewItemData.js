import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";

import DescriptionIcon from "@mui/icons-material/Description";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GavelIcon from "@mui/icons-material/Gavel";
import GroupsIcon from "@mui/icons-material/Groups";

export const templateItem = [
  {
    item: "issue",
    title: "ISSUE TEMPLATE",
    icon: ChecklistRoundedIcon,
    desc: "Customize the templates that are available for contributors to use when they open new issues in your repository.",
    path: "/reviewIssue",
  },
  {
    item: "pr",
    title: "PR TEMPLATE",
    icon: ChecklistRoundedIcon,
    desc: "Using Pull-Request Template, project contributors will automatically see the template's contents in the pull request body.",
    path: "/reviewPR",
  },
  {
    item: "readme",
    title: "README.md",
    icon: ChecklistRoundedIcon,
    desc: "README file tell other people why your project is useful, what they can do with your project, and how they can use it.",
    path: "/reviewReadme",
  },
  {
    item: "contributing",
    title: "CONTRIBUTING.md",
    icon: ChecklistRoundedIcon,
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
    icon: ChecklistRoundedIcon,
    desc: "Automatically detect common vulnerability and coding errors",
  },
  {
    item: "secretScan",
    title: "Secret scanning",
    icon: ChecklistRoundedIcon,
    desc: "Get notified when a secret is pushed to this repository",
  },
  {
    item: "securityPolicy",
    title: "Security Policy",
    icon: ChecklistRoundedIcon,
    desc: "View how to securely report security vulnerabilities for this repository",
  },
  {
    item: "dependabot",
    title: "Dependabot alerts",
    icon: ChecklistRoundedIcon,
    desc: "Get notified when one of your dependencies has a vulnerability",
  },
];
