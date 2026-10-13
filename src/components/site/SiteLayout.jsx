import React from "react";
import { Outlet } from "react-router-dom";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export default function SiteLayout() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
    </div>
  );
}