import React from 'react';

function MultiSelector({ defaultValue, options }: { defaultValue: string; options: { label: string; value: string }[] }) {
  return (
    <div>
      <select
        id="custom-select"
        className="border text-xs rounded-md focus:border-indigo-500 block p-2 border-gray-200 dark:placeholder-indigo-500 placeholder-indigo-500"
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MultiSelector;
