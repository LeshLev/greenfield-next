"use client";

import { useEffect } from "react";

//components
import { Button, Typography } from "@components/ui";
import { toast } from "react-toastify";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    toast.error(`Error with carts fetching, message: ${error.message}`);
  }, [error]);

  return (
    <section className="content-container flex h-screen flex-col items-center justify-center space-y-4">
      <Typography variant="h2">
        Something went wrong trying to get carts!
      </Typography>
      <Button onClick={() => reset()}>Try again</Button>
    </section>
  );
}
