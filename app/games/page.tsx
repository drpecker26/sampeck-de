import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import games from "@/content/games";

export const metadata: Metadata = {
  title: games.title,
  description: games.lede[0],
};

export default function GamesPage() {
  return <PageShell page={games} />;
}
