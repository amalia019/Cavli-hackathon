import { toast } from "@/components/ui/use-toast";

export const toastError = (description, title) => {
  if (!title || title === "") title = "Error!";
  if (!description || description === "")
    description = "Something went wrong. Please try again later.";
  toast({
    variant: "destructive",
    title,
    description,
  });
};
