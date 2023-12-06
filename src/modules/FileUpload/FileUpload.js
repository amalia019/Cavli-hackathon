import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { useRef, useState } from "react";
  import { toastError } from "@/utils/toastError";
  import { toastSuccess } from "@/utils/toastSuccess";
  import { Button } from "@/components/ui/button";
  import { uploadFile } from "@/axios/api";
  
  const FileUpload = () => {
    const [file, setFile] = useState(null);
    const fileRef = useRef(null);
    const handleClick = () => fileRef.current.click();
    const handleClear = () => {
      setFile(null);
      fileRef.current.value = "";
    };
    const updateFile = (e) => {
      setFile(e.target.files[0]);
    };
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
      if (!file) return toastError("Please select a file to upload");
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", fileRef.current.files[0]);
        const res = await uploadFile(formData);
        console.log(res);
        if (res.status === 200) {
          handleClear();
          toastSuccess(
            "File uploaded successfully. You may now close this dialog"
          );
        } else {
          toastError(
            "Error uploading file to S3 storage",
            res?.data?.error?.message
          );
        }
      } catch (err) {
        console.log(err);
        toastError(
          "Error uploading file to S3 storage",
          err?.response?.data?.error?.message
        );
      } finally {
        setLoading(false);
      }
    };
    return (
      <Dialog>
        <DialogTrigger className="font-semibold bg-primary text-white rounded-sm px-8 py-2">
          Upload a file
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload File</DialogTitle>
            <input
              type="file"
              className="hidden"
              accept=".json"
              ref={fileRef}
              multiple={false}
              onChange={updateFile}
            />
            <DialogDescription>
              Upload a JSON type file that contains sensory data. Click{" "}
              <span
                className="underline text-black font-regular cursor-pointer"
                onClick={handleClick}
              >
                here
              </span>{" "}
              to upload
            </DialogDescription>
            <div>{file?.name}</div>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClear}>
              Clear
            </Button>
            <Button type="submit" onClick={handleSubmit} disabled={loading}>
              Upload
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default FileUpload;