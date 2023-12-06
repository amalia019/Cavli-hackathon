import { useEffect, useState } from "react";
import LineChart from "./components/LineChart";
import { getFile } from "@/axios/api";
import { toastError } from "@/utils/toastError";

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFile(props.params.file);
        if (res.status === 200) setData(res.data.data);
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
    <>
      <LineChart data={data} />
    </>
  );
};

export default Chart;
