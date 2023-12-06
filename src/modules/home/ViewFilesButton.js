"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const ViewFilesButton = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <Button onClick={() => router.push("/files")}>View Files</Button>
    </div>
  );
};

export default ViewFilesButton;
