// The five Hitomi restaurant concepts and their ten locations.
// SOURCE: the location pages on hitomi.at (November 2026) — addresses,
// phone numbers, opening hours and menu links exactly as published there.

export interface Location {
	district: string; // Vienna postcode, e.g. "1040"
	name: string; // how the location is known, e.g. "Q-Tower" or a street
	address: string;
	transit?: string; // nearest public transport, where Hitomi mentions it
	hours: string; // opening hours, short form
	phone: string; // as displayed
	tel: string; // for the tel: link (international format, no spaces)
	// This restaurant's own menu on hitomi.at: a PDF, or a web page (1050 has its menu as text).
	// Missing for Franz-Josefs-Bahnhof, which only offers the Teppanyaki buffet.
	menu?: { url: string; type: 'pdf' | 'page' };
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
			{
				district: '1020',
				name: 'Am Tabor',
				address: 'Am Tabor 28',
				hours: 'Di–So 11:00–22:00 · Mo Ruhetag',
				phone: '0660 23 78 328',
				tel: '+436602378328',
				menu: { url: 'https://www.hitomi.at/wp-content/uploads/2024/09/Hitomi_1020_Am_Tabor_Menu_v5.pdf', type: 'pdf' },
			},
			{
				district: '1030',
				name: 'Landstraße',
				address: 'Landstraßer Hauptstraße 144',
				transit: 'U3 Kardinal-Nagl-Platz',
				hours: 'Di–So 11:30–22:00 · Mo Ruhetag',
				phone: '0660 888 56 88',
				tel: '+436608885688',
				menu: { url: 'https://www.hitomi.at/wp-content/uploads/2022/04/Hitomi_1030_SK_V5-1.pdf', type: 'pdf' },
			},
			{
				district: '1030',
				name: 'Q-Tower',
				address: 'Leopold-Böhm-Straße 5',
				hours: 'Mo–Fr & So 11:30–22:00 · Sa Ruhetag',
				phone: '0660 181 98 18',
				tel: '+436601819818',
				menu: { url: 'https://www.hitomi.at/wp-content/uploads/2026/06/q-tower-juni-2026.pdf', type: 'pdf' },
			},
			{
				district: '1050',
				name: 'Pilgramgasse',
				address: 'Pilgramgasse 18',
				transit: 'U4 Pilgramgasse',
				hours: 'Di–So 11:30–22:00 · Mo Ruhetag',
				phone: '0660 1050 018',
				tel: '+436601050018',
				menu: { url: 'https://www.hitomi.at/restaurant-1050/', type: 'page' },
			},
		],
	},
	{
		id: 'sushi-noodle',
		name: 'Sushi & Noodle',
		tagline: 'Sushi, Nudeln und Wok an der Wienzeile',
		description: 'Von Sushi und Nudeln über Maki bis zu authentischen Wok-Gerichten und Klassikern, in modernem asiatischem Ambiente.',
		locations: [
			{
				district: '1040',
				name: 'Rechte Wienzeile',
				address: 'Rechte Wienzeile 1B',
				hours: 'Mo–So 11:00–22:00',
				phone: '+43 676 531 3803',
				tel: '+436765313803',
				menu: { url: 'https://www.hitomi.at/wp-content/uploads/2025/10/Hitomi-Speisekarte-Sushi-and-Noodle-1040.pdf', type: 'pdf' },
			},
		],
	},
	{
		id: 'wok-grill',
		name: 'Wok & Grill',
		tagline: 'Teppanyaki, live zubereitet',
		description:
			'Über 80 Spezialitäten aus der chinesischen und japanischen Küche, frisch und live auf heißen Teppanyaki-Grills zubereitet. Als Buffet oder à la carte, mit großzügigem Gastgarten.',
		locations: [
			{
				district: '1090',
				name: 'Franz-Josefs-Bahnhof',
				address: 'Julius-Tandler-Platz 3, Top C',
				hours: 'Mo–So 11:00–22:00',
				phone: '+43 660 888 66 89',
				tel: '+436608886689',
			},
			{
				district: '1210',
				name: 'Trillergasse',
				address: 'Trillergasse 4',
				hours: 'Mo–So 11:00–21:00',
				phone: '+43 676 912 0878',
				tel: '+436769120878',
				menu: { url: 'https://www.hitomi.at/wp-content/uploads/2025/11/Hitomi-Trillerpark-Speisekarte-Nov-25.pdf', type: 'pdf' },
			},
		],
	},
	{
		id: 'wok-buffet',
		name: 'Wok & Buffet',
		tagline: 'All you can eat',
		description: 'Sushi und Sashimi, Dim Sum und Wok-Klassiker: das ganze Hitomi-Angebot am Buffet.',
		locations: [
			{
				district: '1030',
				name: 'Galleria',
				address: 'Landstraßer Hauptstraße 99–101',
				hours: 'Mo–Fr 11:00–20:00 · Sa 11:00–18:00 · So & Feiertag Ruhetag',
				phone: '+43 676 32 13 758',
				tel: '+436763213758',
				menu: { url: 'https://www.hitomi.at/wp-content/uploads/2026/03/1030-Galleria-Speisekarte.pdf', type: 'pdf' },
			},
			{
				district: '1100',
				name: 'Twin Tower',
				address: 'Wienerbergstraße 11, Top 10+11',
				hours: 'Mo–So 11:00–21:00',
				phone: '+43 676 531 3802',
				tel: '+436765313802',
				menu: { url: 'https://www.hitomi.at/wp-content/uploads/2025/09/SP-A3-website.pdf', type: 'pdf' },
			},
		],
	},
	{
		id: 'sushi-bowl',
		name: 'Sushi & Bowl',
		tagline: 'Schnell, frisch, nach deinem Geschmack',
		description: 'Die eigene Bowl zusammenstellen oder frisches Sushi genießen, im Foodcourt Central Hub.',
		locations: [
			{
				district: '1210',
				name: 'Siemensstraße',
				address: 'Siemensstraße 93–95, Koje 2',
				hours: 'Mo–Fr & So 11:00–21:00 · Sa Ruhetag',
				phone: '+43 676 563 9982',
				tel: '+436765639982',
				menu: { url: 'https://www.hitomi.at/wp-content/uploads/2025/11/1210-Sushi-and-Bowl-Nov2025.pdf', type: 'pdf' },
			},
		],
	},
];

// All locations in one flat list, each with its concept, sorted by district.
export const allLocations = concepts
	.flatMap((concept) => concept.locations.map((location) => ({ ...location, conceptId: concept.id, conceptName: concept.name })))
	.sort((a, b) => a.district.localeCompare(b.district));
