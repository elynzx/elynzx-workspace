import {
  ChartBarIcon,
  IdentificationCardIcon,
  GraduationCapIcon,
} from "@phosphor-icons/react";

export type HomeTab = "overview" | "biography" | "education";

interface HomeTabItem {
  id: HomeTab;
  label: string;
  Icon: React.ElementType;
}

export const HOME_TABS: HomeTabItem[] = [
  { id: "overview", label: "Overview", Icon: ChartBarIcon },
  { id: "biography", label: "Bio", Icon: IdentificationCardIcon },
  { id: "education", label: "Education", Icon: GraduationCapIcon },
];
