import { useState } from 'react';

const useSettingsState = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return {
    notificationsEnabled,
    toggleNotifications: () => setNotificationsEnabled((value) => !value),
  };
};

export default useSettingsState;
