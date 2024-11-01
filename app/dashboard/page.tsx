import Video from "next-video";
import getStarted from "/videos/sir-kid.mp4";
export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center w-full h-full items-center">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <Video src={getStarted} height={400} width={400} />
    </div>
  );
}
