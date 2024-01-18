import React, { ChangeEvent } from 'react';

function MultiSelector({ defaultValue, options, onChange }: { defaultValue: string; options: { label: string; value: string }[], onChange:(event: ChangeEvent<HTMLSelectElement>) => void }) {
  return (
    <div>
      <select
        id="custom-select"
        className="border text-xs rounded-md focus:border-indigo-500 block p-2 border-gray-200 dark:placeholder-indigo-500 placeholder-indigo-500"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MultiSelector;
