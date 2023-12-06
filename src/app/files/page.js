"use client";

import { useEffect, useState } from "react";
import { getFiles } from "@/axios/api";
import MainLayout from "@/components/MainLayout";
import { Separator } from "@/components/ui/separator";
import FileUpload from "@/modules/FileUpload/FileUpload";
import ListFiles from "@/modules/home/ListFiles";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getFiles();
      console.log(res);
      if (res.status === 200) {
        setFiles(res.data.result);
      } else {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const router = useRouter();
  const goBack = () => router.push("/");
  return (
    <MainLayout>
      <header className="flex flex-col gap-2 md:flex-row justify-between lg:mx-9 pb-2">
        <h1 className="text-2xl font-bold">Uploaded Files</h1>
        <div className="flex flex-row items-center gap-3 ">
          <Button variant="outline" onClick={goBack}>
            Go Back
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              fetchData();
            }}
          >
            Refresh
          </Button>
          <FileUpload />
        </div>
      </header>
      <Separator />
      <section>
        {loading && <p>Loading...</p>}
        {!loading && files.length === 0 && <p>No files found...</p>}
        {!loading && files?.length > 0 && <ListFiles files={files} />}
      </section>
    </MainLayout>
  );
};

export default Page;
