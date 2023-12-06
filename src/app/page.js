import MainLayout from "@/components/MainLayout";
import ViewFilesButton from "@/modules/home/ViewFilesButton";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-lg text-center my-8">
        Welcome to sensory data visualizer
      </h1>
      <ViewFilesButton />
    </MainLayout>
  );
}