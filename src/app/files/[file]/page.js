"use client";

import { useEffect } from "react";
import { getFile } from "@/axios/api";
import MainLayout from "@/components/MainLayout";
import { Separator } from "@/components/ui/separator";
import Chart from "@/modules/Chart/Chart";
import { toastError } from "@/utils/toastError";

const Page = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFile(props.params.file);
        console.log(res);
      } catch (err) {
        console.log(err);
        toastError(
          "Error fetching file from S3 storage",
          err?.response?.data?.error?.message
        );
      }
    };

    fetchData();
  }, []);
  return (
    <MainLayout>
      File id #{props.params.file}
      <Separator />
      <Chart />
    </MainLayout>
  );
};

export default Page;
