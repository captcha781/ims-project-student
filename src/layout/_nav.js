import { AccountBookFilled, LayoutFilled } from "@ant-design/icons";

let navigation = [
  {
    identifier: "dashboard",
    name: "Dashboard",
    icon: <LayoutFilled style={{ fontSize: "15px" }} />,
    link: "/dashboard",
    type: "protected",
  },
  {
    identifier: "classroom",
    name: "Classroom",
    icon: <AccountBookFilled style={{ fontSize: "15px" }} />,
    link: "/classroom",
    type: "protected",
  },
  {
    identifier: "test",
    name: "Test",
    icon: <AccountBookFilled style={{ fontSize: "15px" }} />,
    link: "/test",
    type: "unprotected",
  },
];

export default navigation;
