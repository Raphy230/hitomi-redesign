// The five Hitomi restaurant concepts and their ten locations.
// SOURCE: the location pages on hitomi.at (November 2026).

export interface Location {
	district: string; // Vienna postcode, e.g. "1040"
	name: string; // how the location is known, e.g. "Q-Tower" or a street
	address: string;
}

export interface Concept {
	id: string;
	name: string; // shown like the subline under each original Hitomi logo
	tagline: string;
	description: string;
	locations: Location[];
}

export const concepts: Concept[] = [
	{
		id: 'restaurant',
		name: 'Japanisches Restaurant',
		tagline: 'À la carte, in Ruhe genießen',
		description:
			'Sushi, Sashimi und warme Küche à la carte, in einladender Atmosphäre und mit freundlichem Service. Alle Speisen gibt es auch zum Mitnehmen.',
		locations: [
			{ district: '1020', name: 'Am Tabor', address: 'Am Tabor 28' },
			{ district: '1030', name: 'Landstraße', address: 'Landstraßer Hauptstraße 144' },
			{ district: '1030', name: 'Q-Tower', address: 'Leopold-Böhm-Straße 5' },
			{ district: '1050', name: 'Pilgramgasse', address: 'Pilgramgasse 18' },
		],
	},
	{
		id: 'sushi-noodle',
		name: 'Sushi & Noodle',
		tagline: 'Sushi, Nudeln und Wok an der Wienzeile',
		description: 'Von Sushi und Nudeln über Maki bis zu authentischen Wok-Gerichten und Klassikern, in modernem asiatischem Ambiente.',
		locations: [{ district: '1040', name: 'Rechte Wienzeile', address: 'Rechte Wienzeile 1B' }],
	},
	{
		id: 'wok-grill',
		name: 'Wok & Grill',
		tagline: 'Teppanyaki, live zubereitet',
		description:
			'Über 80 Spezialitäten aus der chinesischen und japanischen Küche, frisch und live auf heißen Teppanyaki-Grills zubereitet. Als Buffet oder à la carte, mit großzügigem Gastgarten.',
		locations: [
			{ district: '1090', name: 'Franz-Josefs-Bahnhof', address: 'Julius-Tandler-Platz 3' },
			{ district: '1210', name: 'Trillergasse', address: 'Trillergasse 4' },
		],
	},
	{
		id: 'wok-buffet',
		name: 'Wok & Buffet',
		tagline: 'All you can eat',
		description: 'Sushi und Sashimi, Dim Sum und Wok-Klassiker: das ganze Hitomi-Angebot am Buffet.',
		locations: [
			{ district: '1030', name: 'Galleria', address: 'Landstraßer Hauptstraße 99–101' },
			{ district: '1100', name: 'Twin Tower', address: 'Wienerbergstraße 11' },
		],
	},
	{
		id: 'sushi-bowl',
		name: 'Sushi & Bowl',
		tagline: 'Schnell, frisch, nach deinem Geschmack',
		description: 'Die eigene Bowl zusammenstellen oder frisches Sushi genießen, im Foodcourt Central Hub.',
		locations: [{ district: '1210', name: 'Siemensstraße', address: 'Siemensstraße 93–95' }],
	},
];
