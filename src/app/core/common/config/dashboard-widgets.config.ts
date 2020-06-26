import { WidgetData } from "../../../shared/components/dashboard-widget/dashboard-widget.model";

export const dashboardWidgets: WidgetData[] = [
  {
    bgClass: "sales",
    title: "Sales",
    icon: "fa-shopping-cart",
    value: "358",
    description: "20% Higher than month"
  },
  {
    bgClass: "orders",
    title: "Completed Orders",
    icon: "fa-suitcase",
    value: "858",
    description: "70% Higher than month"
  },
  {
    bgClass: "purchase",
    title: "Purchase",
    icon: "fa-chart-line",
    value: "128",
    description: "20% Higher than month"
  },
  {
    bgClass: "earnings",
    title: "Total Earnings",
    icon: "fa-dollar-sign",
    value: "$1000",
    description: "15% Higher than month"
  }
];
