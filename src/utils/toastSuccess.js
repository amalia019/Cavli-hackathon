import { toast } from "@/components/ui/use-toast";

export const toastSuccess = (description, title) => {
  if (!title || title === "") title = "Success!";
  if (!description || description === "")
    description = "Action completed successfully.";
  toast({
    variant: "default",
    title,
    description,
  });
};
