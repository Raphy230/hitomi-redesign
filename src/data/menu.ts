// Menu data — kept separate from the design, so changing a dish or price
// never means touching HTML.
//
// SOURCE: real dishes and prices from the menu published on hitomi.at for
// Hitomi 1050 (Pilgramgasse 18), as of November 2026. Every location has its own
// menu and prices, so the section says so clearly.

export interface Dish {
	code: string; // the dish number on Hitomi's own menu, e.g. "C16"
	name: string;
	description: string;
	price: string;
	allergens: string; // Austrian allergen letters, e.g. "BD"
	spicy?: boolean;
}

export interface MenuCategory {
	id: string;
	title: string;
	dishes: Dish[];
}

export const menuCategories: MenuCategory[] = [
	{
		id: 'vorspeisen',
		title: 'Vorspeisen & Suppen',
		dishes: [
			{ code: 'V5', name: 'Yaki Gyoza', description: 'Gegrillte Teigtaschen, Huhn oder vegetarisch · 5 Stk.', price: '5,20', allergens: 'AFN' },
			{ code: 'V11', name: 'Edamame', description: 'Sojabohnen in der Hülse', price: '5,20', allergens: 'F' },
			{ code: 'V13', name: 'Takoyaki', description: 'Teigbällchen mit Oktopusfüllung', price: '5,90', allergens: 'ADR' },
			{ code: 'A1', name: 'Miso Suppe', description: 'Traditionelle japanische Suppe', price: '2,90', allergens: 'F' },
		],
	},
	{
		id: 'sushi',
		title: 'Sushi & Maki',
		dishes: [
			{ code: 'C16', name: 'Hitomi Dragon Rolls', description: 'Avocado, Garnelen, Lachs, Aal und Salat · 8 Stk.', price: '14,90', allergens: 'BD' },
			{ code: 'C15', name: 'Regenbogen Sushi Rolls', description: 'Lachs, Thunfisch, Heilbutt und Avocado · 8 Stk.', price: '11,90', allergens: 'BD' },
			{ code: 'C18', name: 'Spicy Tuna Maki', description: 'Thunfisch, Avocado, Gurke, Lauch und Chili-Mayo · 8 Stk.', price: '12,90', allergens: 'DG', spicy: true },
			{ code: 'S16', name: 'Unagi Sushi', description: 'Aal-Sushi mit Teriyaki-Sauce · 6 Stk.', price: '10,20', allergens: 'D' },
		],
	},
	{
		id: 'sashimi',
		title: 'Sashimi & Platten',
		dishes: [
			{ code: 'D1', name: 'Sashimi Mix', description: 'Lachs, Thunfisch und Heilbutt · 12 Stk.', price: '17,50', allergens: 'BD' },
			{ code: 'F1', name: 'Hitomi Teller', description: 'Sashimi, Lachs-Sushi, Avocado-Sushi und Lachs-Avocado-Maki', price: '16,50', allergens: 'BDN' },
			{
				code: 'F6',
				name: 'Hitomi Schiff für zwei',
				description: 'Dopin-Mushi-Suppe, 12 Sushi, 18 Sashimi, 18 Maki, 2 Temaki und 2 Mochi',
				price: '52,90',
				allergens: 'ABDFN',
			},
		],
	},
	{
		id: 'warm',
		title: 'Warme Gerichte',
		dishes: [
			{ code: 'H12', name: 'Salmon Teriyaki', description: 'Gegrillter Lachs und Gemüse in Teriyaki-Sauce, mit Reis', price: '14,90', allergens: 'ADFN' },
			{ code: 'H5', name: 'Thai Crispy Duck', description: 'Knusprige Ente mit Gemüse in grüner Thai-Curry-Sauce, mit Reis', price: '14,90', allergens: 'ADHL', spicy: true },
			{ code: 'H22', name: 'Beef Teriyaki', description: 'Rindfleisch mit Zwiebeln, auf der heißen Eisenplatte serviert', price: '16,90', allergens: 'AFN' },
			{ code: 'H17', name: 'Tori Don', description: 'Gegrilltes Hühnerfleisch auf Reis in Teriyaki-Sauce', price: '9,90', allergens: 'AFN' },
		],
	},
];

// The Austrian allergen codes used on Hitomi's menus
export const allergenLegend =
	'A Gluten · B Krebstiere · C Ei · D Fisch · E Erdnüsse · F Soja · G Milch · H Schalenfrüchte · L Sellerie · M Senf · N Sesam · O Sulfite · P Lupinen · R Weichtiere';
