function BaseCheckbox({ children: label }) {
  return (
    <label className="inline-flex items-center gap-2">
      <input
        type="checkbox"
        className="text-[#1bd760] bg-transparent rounded-sm border-neutral-500 hover:border-[#1bd760] !ring-0 !ring-offset-0 checked:bg-checkbox"
      />
      <span className="text-sm text-neutral-400">{label}</span>
    </label>
  );
}

export default BaseCheckbox;
