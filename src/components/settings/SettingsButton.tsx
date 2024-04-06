import { forwardRef, memo } from 'react';

const SettingsButton = memo(
  forwardRef((props, ref) => {
    const { handleOpen, selected } = props;
    // Increase render count.
    ref.current++;

    // Log current render count.
    console.log('Render count of button is: ' + ref.current);

    /* Button */
    return (
      <button onClick={handleOpen}>
        {selected.country.name} - ({selected.currency} - {selected.language})
      </button>
    );
  })
);

export default SettingsButton;
