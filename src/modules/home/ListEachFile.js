import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ListEachFile = (props) => {
  const router = useRouter();
  const handleClick = () => router.push(`/files/${props.file._id}`);
  return (
    <div className="flex flex-row gap-6 items-center">
      {props.file.fileName}{" "}
      <Button type="button" onClick={handleClick}>
        Show Chart
      </Button>
    </div>
  );
};

export default ListEachFile;
