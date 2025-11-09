export default function DietaryRestrictions({ onSelect, selectedDiet }) {
  return (
    <div className="dietary-restrictions">
      <button type="button">{selectedDiet || "Dietary restrictions"}</button>
      <div className="dietary-restrictions-content">
        <div onClick={() => onSelect("Vegan")}>Vegan</div>
        <div onClick={() => onSelect("Gluten-free")}>Gluten-free</div>
        <div onClick={() => onSelect("Dairy-free")}>Dairy-free</div>
        <div onClick={() => onSelect("Keto")}>Keto</div>
        <div onClick={() => onSelect("Nut allergies")}>Nut allergies</div>
        <div onClick={() => onSelect("Vegetarian")}>Vegetarian</div>
      </div>
    </div>
  );
}
