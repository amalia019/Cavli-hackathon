import ListEachFile from "./ListEachFile";

const ListFiles = (props) => {
  return (
    <div className="space-y-2 mt-4">
      <div className="font-bold underline">Uploaded Files: </div>
      {props.files.map((file, index) => {
        return <ListEachFile file={file} key={index} />;
      })}
    </div>
  );
};

export default ListFiles;
