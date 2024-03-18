import { Faq, GetAdvice, Featured, SolveProblem, Scandal } from "@/components";
import { Layout } from "@/layout";

export default function Home() {
  return (
    <Layout>
      <section>Hero Banner</section>
      <Scandal />
      <SolveProblem />
      <Featured />
      <Faq />
      <GetAdvice />
    </Layout>
  );
}
