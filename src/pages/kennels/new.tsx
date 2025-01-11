/**
 * New Kennel Page
 * 
 * Page for creating a new kennel. Uses the KennelForm component
 * and handles form submission and navigation.
 */

import { type NextPage } from "next";
import { useRouter } from "next/router";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { KennelForm } from "~/components/forms/KennelForm";
import { api } from "~/utils/api";

const NewKennelPage: NextPage = () => {
  const router = useRouter();
  const utils = api.useContext();

  const { mutate: createKennel, isLoading } = api.kennel.create.useMutation({
    onSuccess: async () => {
      await utils.kennel.getAll.invalidate();
      await router.push("/kennels");
    },
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Add New Kennel
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Fill out the form below to add a new kennel to your facility.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <KennelForm onSubmit={createKennel} isSubmitting={isLoading} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewKennelPage;
