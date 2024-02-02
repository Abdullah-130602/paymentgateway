/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/jsx/components/Dashboard/Home.js",
    "./src/jsx/components/AppsMenu/AppProfile/AppProfile.js",
    "./src/jsx/components/Dashboard/Registration/RequirementList.js",
    "./src/jsx/components/Dashboard/Registration/CreateAccount.js",
    "./src/jsx/components/Dashboard/Setting/Setting.js",
    "./src/jsx/components/Dashboard/SuperAdminSetting/SuperAdminSetting.js",
    "./src/jsx/components/Dashboard/Company/Company.js",
    "./src/jsxClient/components/Dashboard/Users/Users.js",
    "./src/jsxClient/components/Dashboard/Invoice/CreateInvoice.js",
    "./src/jsxClient/components/Dashboard/Invoice/InvoiceList.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
