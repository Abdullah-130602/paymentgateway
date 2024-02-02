export const MenuList = [
  //Dashboard
  {
    title: "Dashboard",
    iconStyle: <i className="fas fa-home"></i>,
    to: "/dashboard",
  },
  {
    title: "Profile",
    iconStyle: <i className="fas fa-user"></i>,
    to: "app-profile",
  },
  {
    title: "Registration",
    classsChange: "mm-collapse",
    iconStyle: <i className="fas fa-user"></i>,
    content: [
      {
        title: "Requirement Form List",
        to: "requirement-form-list",
      },
      {
        title: "Create Account",
        to: "create-account/No-Approval/0/Create-Account",
      },
    ],
  },
  {
    title: "Company",
    iconStyle: <i className="bi bi-building"></i>,
    to: "company",
  },
  {
    title: "Settings",
    iconStyle: <i className="bi bi-gear-fill"></i>,
    to: "settings",
  },
];
