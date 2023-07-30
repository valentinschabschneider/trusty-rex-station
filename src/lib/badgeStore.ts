import { writable, type Writable } from 'svelte/store';

export type Color =
	| 'red'
	| 'yellow'
	| 'green'
	| 'indigo'
	| 'purple'
	| 'pink'
	| 'blue'
	| 'dark'
	| 'primary'
	| 'none';

interface Badge {
	key: string;
	color: Color;
}

const colors: Color[] = [
	'red',
	'yellow',
	'green',
	'indigo',
	'purple',
	'pink',
	'blue',
	'dark',
	'primary'
];

function randomColor(usableColors: Color[]): Color {
	return usableColors[Math.floor(Math.random() * usableColors.length)];
}

export const badges: Writable<Badge[]> = writable([]);

export const addBadge = (key: string) => {
	badges.update((all) => {
		const usedColors = [...new Set(all.map((b) => b.color))];
		const usableColors = colors.filter((c) => !usedColors.includes(c)) || colors;

		const badge: Badge = {
			key,
			color: randomColor(usableColors)
		};

		return [badge, ...all];
	});
};
