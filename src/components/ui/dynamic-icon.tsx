"use client";

import {
  ArrowUpRight,
  ArrowUp,
  ArrowLeft,
  InstagramLogo,
  PinterestLogo,
  LinkedinLogo,
  House,
  Storefront,
  Hammer,
  Building,
  Knife,
  Bathtub,
  Lightbulb,
  Chair,
  Cube,
  MapPin,
  Envelope,
  CompassTool,
  Phone,
} from "@phosphor-icons/react";

export const iconMap = {
  ArrowUpRight,
  ArrowUp,
  ArrowLeft,
  InstagramLogo,
  PinterestLogo,
  LinkedinLogo,
  House,
  Storefront,
  Hammer,
  Building,
  Knife,
  Bathtub,
  Lightbulb,
  Chair,
  Cube,
  MapPin,
  Envelope,
  CompassTool,
  Phone,
} as const;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  size,
  weight,
  className,
}: {
  name: IconName;
  size?: number;
  weight?: "regular" | "bold" | "duotone" | "fill" | "light" | "thin";
  className?: string;
}) {
  const Comp = iconMap[name];
  return <Comp size={size} weight={weight} className={className} />;
}