"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation"; 
import { Input } from "@/components/ui/input";
import { use, useState } from "react";


const page = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const trpc = useTRPC();
  const createProject = useMutation(trpc.projects.create.mutationOptions({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      router.push(`/projects/${data.id}`);
    }
  }));
  return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto flex items-center flex-col gap-y-4 justify-center px-6 py-8 sm:px-12 sm:py-16 lg:py-24">
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
          <Button disabled={createProject.isPending} onClick = {() => createProject.mutate({ value: value })}>
            Submit
          </Button>
        </div>
      </div>
  );
}
export default page;