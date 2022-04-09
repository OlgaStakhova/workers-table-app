import { success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export const succsessNotification = message =>
    success({
        text: message,
        delay: 3000,
    });