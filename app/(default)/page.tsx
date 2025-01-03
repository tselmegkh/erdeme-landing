export const metadata = {
  title: "Home",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import AppDownloadButtons from "@/components/download-buttons";

export default function Home() {
  return (
    <>
      <Hero />
      <AppDownloadButtons />
      <Features />
      <Zigzag />
    </>
  );
}
