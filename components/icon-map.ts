import {
  Stamp,
  Wrench,
  Sparkles,
  HandCoins,
  HandHeart,
  ShieldCheck,
  Dices,
  Bomb,
  FlaskConical,
  Factory,
  Mountain,
  Printer,
  Mic,
  Hotel,
  Swords,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/lib/industries";

/** Ánh xạ tên icon (chuỗi serializable) -> component lucide-react */
export const ICON_MAP: Record<IconName, LucideIcon> = {
  Stamp,
  Wrench,
  Sparkles,
  HandCoins,
  HandHeart,
  ShieldCheck,
  Dices,
  Bomb,
  FlaskConical,
  Factory,
  Mountain,
  Printer,
  Mic,
  Hotel,
  Swords,
};
