import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import tools from "@/content/tools";

export const metadata: Metadata = {
  title: tools.title,
  description: tools.lede[0],
};

export default function ToolsPage() {
  return <PageShell page={tools} />;
}
