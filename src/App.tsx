import Modal from 'react-modal';

import SettingsSelector from './components/settings/SettingsSelector';

Modal.setAppElement('#root');

function App() {
  return <SettingsSelector />;
}

export default App;
