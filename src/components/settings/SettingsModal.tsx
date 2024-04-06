import { useState } from 'react';
import Modal from 'react-modal';

import CountrySelect from '../country/CountrySelect';
import LanguageSelect from '../language/LanguageSelect';
import CurrencySelect from '../currency/CurrencySelect';

const SettingsModal = (props) => {
  const { isOpen, selected, dispatch, handleClose } = props;

  // ? Introduced a separate state for keeping track of the changed values
  const [_selected, _setSelected] = useState(selected);

  const handleChange = (value: any, key: string) => {
    _setSelected((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSave = () => {
    dispatch({
      type: 'save',
      payload: _selected,
    });
    handleClose();
  };

  return (
    <Modal isOpen={isOpen}>
      {/* Header */}
      <h2>Select your region, currency and language.</h2>
      {/* Country */}
      <CountrySelect value={_selected.country} onChange={(value) => handleChange(value, 'country')} />
      {/* Currency */}
      <CurrencySelect value={_selected.currency} onChange={(value) => handleChange(value, 'currency')} />
      {/* Language */}
      <LanguageSelect language={_selected.language} onChange={(value) => handleChange(value, 'language')} />
      {/* Close button */}
      <button onClick={handleClose}>Close</button>
      <button onClick={handleSave}>Save</button>
    </Modal>
  );
};

export default SettingsModal;
