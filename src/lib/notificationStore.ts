import { writable, type Writable } from 'svelte/store';

interface Notification {
	id: number;
	message: string | null;
}

export const notifications: Writable<Notification[]> = writable([]);

export const addNotification = (message: string) => {
	// Create a unique ID so we can easily find/remove it
	// if it is dismissible/has a timeout.
	const id = Math.floor(Math.random() * 10000);

	// Setup some sensible defaults for a toast.
	const notification: Notification = {
		id,
		message
	};

	// Push the toast to the top of the list of toasts
	notifications.update((all) => [notification, ...all]);
};

export const dismissNotification = (id: number) => {
	notifications.update((all) => all.filter((t) => t.id !== id));
};
