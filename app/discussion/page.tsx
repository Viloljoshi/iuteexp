import { DiscussionMode } from "@/components/DiscussionMode";
import { SiteHeader } from "@/components/SiteHeader";

export default function DiscussionPage() {
  return (
    <>
      <SiteHeader active="discussion" />
      <DiscussionMode />
    </>
  );
}
