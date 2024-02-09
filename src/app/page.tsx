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
        {basicInfo?.location}
      </h2>
      <p className="tracking-widest my-2 text-site-dimmed">
        I am a{" "}
        <span className="text-brand">
          FrontEnd focused MERN Stack enthusiastic🥳
        </span>{" "}
        person with proficient knowledge of Web Devlopment technologies👨‍💻🧑‍💻and I
        am a fresh <span className="text-brand"> CSE graduate🎓</span> with
        B.Sc. Engineering from University of Chittagong, Bangladesh. I have
        quite a comfortable knowledge about{" "}
        <span className="text-brand">Competitive Programming with DSA ✍️</span>.
        I love to make complex code⌨️ into readable and efficient clean code. I
        love to travel✈️, cycling🚴, swimming🏊 and playing football⚽
      </p>
      <div className="divider-x" />
      <ExpertiseSection heading="My Skills" list={skills} />
      <ExpertiseSection heading="Comfortable Tools" list={tools} />
      <ExpertiseSection heading="Operating Systems" list={OS} />
    </main>
  );
}
