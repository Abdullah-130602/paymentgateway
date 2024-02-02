export const MenuList = [
  //Dashboard
  {
    title: "Dashboard",
    iconStyle: <i className="fas fa-home"></i>,
    to: "/dashboard",
  },
  // Profile
  {
      title:'Profile',
      iconStyle: <i className="bi bi-person-bounding-box"></i>,
      to:'app-profile'
  },
  // Invoices
  {
      title:'Invoice',
      classsChange: 'mm-collapse',
      iconStyle: <i className="bi bi-receipt"></i>,
      content : [
          {
              title:'Create New Invoice',
              to: 'create-new-invoice'
          },
          {
              title:'Invoice List',
              to: 'invoice-list'
          }
      ]
  },
  // Customers
  {
      title:'Customers',
      iconStyle: <i className="bi bi-people-fill"></i>,
      to:'customers'
  },
  // Users
  {
      title:'Users',
      iconStyle: <i className="bi bi-person-lines-fill"></i>,
      to:'users'
  },
];
