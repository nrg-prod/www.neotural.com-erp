import { MenuItem } from "../../components/sidebar-nav/sidebar-nav.model";

export const abc = 5;

export const SidenavItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "assets/images/dashboard.png",
    path: "/dashboard",
    childern: [],
    submenu: false
  },
  {
    id: "employment",
    label: "Employees",
    icon: "assets/images/employee.png",
    path: "/employment",
    submenu: false,
    childern: []
  },
  {
    id: "vendorAndCustomer",
    label: "Vendors",
    icon: "assets/images/vendor-customer.png",
    path: "/vendor-and-customer",
    childern: [],
    submenu: false
  },
 
  {
    id: "purchase",
    label: "Purchases",
    icon: "assets/images/circle-cropped.png",
    path: "/purchase",
    childern: [{
      id: "purchase-order",
      label: "Orders",
      path: "/purchase",
     },
     {
      id: "purchase-invoice",
      label: "Invoices",
      path: "/purchase/invoice",
      }, {
        id: "purchase-invoice",
        label: "Returns",
        path: "/purchase/return",
      }],
    submenu: true
  },
  {
    id: "product",
    label: "Product",
    icon: "assets/images/category-product.png",
    path: "/category-and-product",
    childern: [
      {
        id: "product",
        label: "product",
        path: "/category-and-product",
       },
       {
        id: "units",
        label: "units",
        path: "/category-and-product/units",
       },
       {
        id: "category",
        label: "category",
        path: "/category-and-product/category",
       }
    ],
    submenu: true
  },
  {
    id: "sales",
    label: "Sales",
    icon: "assets/images/sales.png",
    path: "/sales",
    childern: [{
      id: "sales-order",
      label: "Orders",
      path: "/sales",
     },
     {
      id: "sales-invoice",
      label: "Invoices",
      path: "/sales/invoice",
     },
     {
      id: "customers",
      label: "Customer",
       path: "/vendor-and-customer/customer",
     },
      {
        id: "sales-invoice",
        label: "Returns",
        path: "/sales/return",
      }
    ],
    submenu: true
  },

  {
    id: "stock",
    label: "Stock",
    icon: "assets/images/stock.png",
    path: "/stock",
    submenu: false,
    childern: []
  },

  {
    id: "finance",
    label: "Finance",
    icon: "assets/images/finance.png",
    path: "/finance",
    childern: [
      {
        id: "pettycash",
        label: "pettycash",
        path: "/finance/pettycashlist",
      },
      {
        id: "invoice",
        label: "Invoices",
        path: "/finance/invoicelist",
      },
      {
        id: "return",
        label: "Return",
        path: "/finance/returnlist",
      },
      {
        id: "profitandloss",
        label: "ProfitAndLoss",
        path: "/finance/profitandloss",
      }
    ],
    submenu: true
  },

  {
    id: "userManagement",
    label: "User Management",
    icon: "assets/images/usermgt.png",
    path: "/user-management",
    submenu: false,
    childern: []
  },

  /*{
    id: "finance",
    label: "Finance",
    icon: "assets/images/finance.png",
    path: "/finance"
  },
  {
    id: "stock",
    label: "Stock",
    icon: "assets/images/stock.png",
    path: "/stock"
  },
  {
    id: "report",
    label: "Report",
    icon: "assets/images/reports.png",
    path: "/report"
  },
  {
    id: "userManagement",
    label: "User Management",
    icon: "assets/images/usermgt.png",
    path: "/user-management"
  },*/
  // {
  //   id: "logout",
  //   label: "Log Out",
  //   icon: "assets/images/logout.png",
  //   path: "/login",
  //   childern: [],
  //   submenu: false
  // }
];
