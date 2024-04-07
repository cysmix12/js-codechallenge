import { forwardRef, memo } from 'react';

import { SelectorData } from '../../types';
import { getFlagSVG } from '../../helpers';

interface SettingsButtonProps {
  handleOpen: () => void;
  selected: SelectorData;
}

const SettingsButton = memo(
  forwardRef<number, SettingsButtonProps>((props, ref) => {
    const { handleOpen, selected } = props;
    // Increase render count.
    // ? Why didn't I just include the useRef declaration?
    // ? A: To confirm that ref from outside can be passed and modified from here
    // @ts-ignore
    ref.current++;

    // Log current render count.
    // @ts-ignore
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
