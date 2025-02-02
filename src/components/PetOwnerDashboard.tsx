import React, { useEffect, useState } from 'react';

const PetOwnerDashboard: React.FC = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('/api/trpc/pet.getByOwnerId'); 
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div key={pet.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{pet.name}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetOwnerDashboard;
