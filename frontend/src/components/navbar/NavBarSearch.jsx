import { useState, useCallback, React } from "react";
import ReactModal from "react-modal";

import Search from "../../assets/NavBar/Discovery.svg";

const categories = [
  {
    id: 1,
    name: "Ressources Humaines",
    subCategories: [{ id: 11, name: "SubCategory 1" }],
  },
  {
    id: 2,
    name: "Sécurité",
    subCategories: [{ id: 21, name: "SubCategory 2" }],
  },
  {
    id: 3,
    name: "Technique",
    subCategories: [
      { id: 31, name: "SubCateggory 3" },
      { id: 32, name: "SubCategory 4" },
    ],
  },
];

const locations = [
  { id: 1, name: "Location 1" },
  { id: 2, name: "Location 2" },
];

function NavBarSearch() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleCategoryChange = useCallback(
    (e) => {
      const selectedCategorys = categories.filter(
        (category) => category.id === +e.target.value
      );
      if (selectedCategorys) {
        setSelectedCategory(selectedCategorys);
        setSelectedSubCategory("");
        setSelectedLocation("");
      } else {
        setSelectedCategory("");
        setSelectedSubCategory("");
        setSelectedLocation("");
      }
    },
    [categories]
  );

  const handleSubCategoryChange = useCallback(
    (e) => {
      const selectedSubCategorys = selectedCategory.subCategories.find(
        (subCategory) => subCategory.id === +e.target.value
      );
      if (selectedSubCategorys) {
        setSelectedSubCategory(selectedSubCategorys.name);
        setSelectedLocation("");
      } else {
        setSelectedSubCategory("");
        setSelectedLocation("");
      }
    },
    [selectedCategory]
  );

  const handleLocationChange = useCallback(
    (e) => {
      const selectedLocations = locations.find(
        (location) => location.id === +e.target.value
      );
      if (selectedLocations) {
        setSelectedLocation(selectedLocations.name);
      } else {
        setSelectedLocation("");
      }
    },
    [locations]
  );

  return (
    <div className="search">
      <button type="button" onClick={openModal}>
        <img src={Search} alt="search" />
      </button>
      <ReactModal isOpen={modalIsOpen}>
        <h2>Annonce</h2>
        <select value={selectedCategory.id} onChange={handleCategoryChange}>
          <option value="">Domaine</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <select
          value={selectedSubCategory.id}
          onChange={handleSubCategoryChange}
        >
          <option value="">Select a sub-category</option>
          {selectedCategory[0]?.subCategories?.map((subCategory) => (
            <option key={subCategory.id} value={subCategory.id}>
              {subCategory.name}
            </option>
          ))}
        </select>
        <select value={selectedLocation.id} onChange={handleLocationChange}>
          <option value="">Localisation</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </ReactModal>
    </div>
  );
}

export default NavBarSearch;
