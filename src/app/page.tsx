import { basicInfo } from "@/utils/contants";

export default function Home() {
  return (
    <main className="cornered border-dimmed p-5">
      <h2 className="text-xl md:text-4xl">Hi 👋, myself </h2>
      <h1
        title={basicInfo?.name}
        className="animated_text tracking-widest md:text-6xl text-3xl font-semibold"
      >
        {basicInfo?.name}
      </h1>
      <h2 className="text-lg md:text-2xl">A passionate <span className="text-green-500">{basicInfo?.title}</span> from {basicInfo?.location}</h2>
      <div className="divider-x"/>
    </main>
  );
}
