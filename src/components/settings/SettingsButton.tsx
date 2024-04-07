import { forwardRef, memo } from 'react';

import { getFlagSVG } from '../../helpers';

interface SettingsButtonProps {
  handleOpen: () => void;
  selected: {
    country: {
      name: string;
      code: string;
    };
    currency: string;
    language: string;
  };
}

const SettingsButton = memo(
  forwardRef((props: SettingsButtonProps, ref) => {
    const { handleOpen, selected } = props;
    // Increase render count.
    ref.current++;

    // Log current render count.
    console.log('Render count of button is: ' + ref.current);

    /* Button */
    return (
      <button onClick={handleOpen}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src={getFlagSVG(selected.country.code)} height={32} width={32} loading="lazy" />
          <span>
            {selected.country.name} - ({selected.currency} - {selected.language})
          </span>
        </div>
      </button>
    );
  })
);

export default SettingsButton;
