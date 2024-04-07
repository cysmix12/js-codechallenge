import { useMemo } from 'react';
import countries from 'i18n-iso-countries';
import Select from 'react-select';

import { CountryData } from '../../types';
import { CountrySelectOption } from './CountrySelectOption';
import { CountrySelectSingleValue } from './CountrySelectSingleValue';

// Register countries
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

// --- TASK G ---
// Please replace "any" with a proper type in this file (and where it is needed).

// Props
interface CountrySelectProps {
  value?: CountryData;
  onChange?: (value: CountryData) => void;
}

// Constants
export const DEFAULT_COUNTRY = {
  code: 'US',
  name: 'United States of America',
};

// Component
export const CountrySelect = ({ value = DEFAULT_COUNTRY, onChange }: CountrySelectProps) => {
  // Prepare Data
  const data = useMemo(
    () =>
      Object.entries(countries.getNames('en', { select: 'official' })).map(([code, name]) => {
        return {
          value: { code, name },
          label: name,
        };
      }),
    []
  );
  const defaultValue = { value: value, label: value.name };

  // Render
  return (
    <div>
      <label>
        <span>Country</span>
        <Select
          isMulti={false}
          options={data}
          components={{ Option: CountrySelectOption, SingleValue: CountrySelectSingleValue }}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            if (onChange) onChange(newValue!.value);
          }}
        />
      </label>
    </div>
  );
};

export default CountrySelect;
