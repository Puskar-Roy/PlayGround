import React from "react";
import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db.ts";
import { redirect } from "next/navigation";
import Initialmodal from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/server/${server.id}`);
  }

  return <Initialmodal />;
};

export default SetupPage;
