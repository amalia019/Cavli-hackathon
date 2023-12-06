"use client";

import MainLayout from "@/components/MainLayout";
import { Separator } from "@/components/ui/separator";
import Chart from "@/modules/Chart/Chart";

const Page = (props) => {
  return (
    <MainLayout>
      File id #{props.params.file}
      <Separator />
      <Chart id={props.params.file} />
    </MainLayout>
  );
};

export default Page;
