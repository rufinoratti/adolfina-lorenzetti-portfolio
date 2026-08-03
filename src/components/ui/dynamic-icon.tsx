"use client";

import {
  ArrowUpRight,
  ArrowUp,
  ArrowLeft,
  InstagramLogo,
  BehanceLogo,
  LinkedinLogo,
  PenNib,
  Books,
  ShareNetwork,
  Package,
  Browser,
  PencilSimpleLine,
} from "@phosphor-icons/react";

export const iconMap = {
  ArrowUpRight,
  ArrowUp,
  ArrowLeft,
  InstagramLogo,
  BehanceLogo,
  LinkedinLogo,
  PenNib,
  Books,
  ShareNetwork,
  Package,
  Browser,
  PencilSimpleLine,
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