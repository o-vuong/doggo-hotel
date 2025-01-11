/**
 * New Pet Page
 * 
 * Page for creating a new pet profile. Uses the PetForm component
 * and handles form submission and navigation.
 * 
 * @module pages/pets/new
 */

import { type NextPage } from "next";
import { useRouter } from "next/router";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { PetForm } from "~/components/forms/PetForm";
import { api } from "~/utils/api";

const NewPetPage: NextPage = () => {
  const router = useRouter();
  const utils = api.useContext();

  const { mutate: createPet, isLoading } = api.pet.create.useMutation({
    onSuccess: async () => {
      await utils.pet.getByOwnerId.invalidate();
      await router.push("/pets");
    },
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Add New Pet
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Fill out the form below to add a new pet to your profile.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <PetForm onSubmit={createPet} isSubmitting={isLoading} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewPetPage;
