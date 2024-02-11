import ExpertiseSection from "@/components/Layers/ExpertiseSection";
import { basicInfo } from "@/utils/contants";
import { OS, skills, tools } from "@/utils/expertise";

export default function Home() {
  return (
    <main className="cornered border-dimmed p-5 bg-block">
      <h2 className="text-xl md:text-4xl mb-2">Hi 👋, myself </h2>
      <h1
        title={basicInfo?.name}
        className="animated_text tracking-widest md:text-6xl text-3xl font-semibold my-3"
      >
        {basicInfo?.name}
      </h1>
      <h2 className="text-base md:text-xl my-2">
        A passionate <span className="text-brand">{basicInfo?.title}</span> from{" "}
        {basicInfo?.location}.
      </h2>
      <div className="text-xs md:text-sm">{basicInfo?.aboutMeJsx}</div>
      <div className="divider-x" />
      <ExpertiseSection heading="My Skills" list={skills} />
      <ExpertiseSection heading="Comfortable Tools" list={tools} />
      <ExpertiseSection heading="Operating Systems" list={OS} />
    </main>
  );
}
