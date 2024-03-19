import { Faq, HeroBanner, GetAdvice, Featured, SolveProblem, Scandal, YouCould } from "@/components";
import { Layout } from "@/layout";
export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <YouCould />
      <Scandal />
      <SolveProblem />
      <Featured />
      <Faq />
      <GetAdvice />
    </Layout>
  );
}
