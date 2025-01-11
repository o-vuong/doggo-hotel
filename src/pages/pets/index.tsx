/**
 * Pet List Page
 * 
 * Displays a list of pets owned by the current user or all pets for admin users.
 * Provides functionality to add, edit, and delete pets.
 * 
 * @module pages/pets
 */

import { type NextPage } from "next";
import { useRouter } from "next/router";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";

const PetsPage: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { data: pets, isLoading } = api.pet.getByOwnerId.useQuery();
  const { data: allPets } = api.pet.getAll.useQuery(undefined, {
    enabled: session?.user.role === "ADMIN",
  });

  const displayPets = session?.user.role === "ADMIN" ? allPets : pets;

  /**
   * Navigate to the pet creation page
   */
  const handleAddPet = () => {
    void router.push("/pets/new");
  };

  /**
   * Navigate to the pet details/edit page
   */
  const handlePetClick = (petId: string) => {
    void router.push(`/pets/${petId}`);
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div>Loading...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            {session?.user.role === "ADMIN" ? "All Pets" : "My Pets"}
          </h2>
          <Button onClick={handleAddPet}>
            <Plus className="mr-2 h-4 w-4" />
            Add Pet
          </Button>
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayPets?.map((pet) => (
            <div
              key={pet.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-white shadow transition hover:shadow-md"
              onClick={() => handlePetClick(pet.id)}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {pet.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{pet.breed}</p>
                
                <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Age</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {new Date().getFullYear() -
                        new Date(pet.dateOfBirth).getFullYear()}{" "}
                      years
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Weight</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.weight} lbs
                    </dd>
                  </div>
                </dl>

                {session?.user.role === "ADMIN" && (
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-500">
                      Owner: {pet.owner.name}
                    </p>
                  </div>
                )}

                {pet.reservations && pet.reservations[0] && (
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-500">
                      Last Stay:{" "}
                      {new Date(
                        pet.reservations[0].startDate
                      ).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 rounded-lg ring-2 ring-transparent transition group-hover:ring-indigo-500" />
            </div>
          ))}

          {displayPets?.length === 0 && (
            <div className="col-span-full">
              <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No pets yet
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by adding your first pet
                </p>
                <div className="mt-6">
                  <Button onClick={handleAddPet}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Pet
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PetsPage;
