const allRecipes = [
	{
		id: 'f3af01ca-3f8b-44f7-a959-8031365b221d',
		title: 'Paella',
		summary: 'Arroz con mariscos',
		aggregateLikes: 55,
		healthScore: 44,
		analyzedInstructions: ['Paso 1', 'Paso 2'],
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrVNoeFStTHMg1-ZrlG6P0xkzxXONxf1Y12qp7ib_j857pdDymCftHaolubykKN1FsJE&usqp=CAU',
		dietTypes: [
			{
				title: 'vegetarian',
			},
			{
				title: 'vegan',
			},
		],
	},
	{
		id: 'f87e302d-0031-4f23-a264-386ce4347129',
		title: 'Pizza',
		summary: 'masa redonda y chata con salsa de tomate y queso',
		aggregateLikes: 55,
		healthScore: 44,
		analyzedInstructions: ['Paso 1', 'Paso 2'],
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKN5UB1uSch6ziU34UbzrVsFIJig4jiRUKrmVcQCzXK4XZlhug1SoWhzTX3cQBdJ40E4&usqp=CAU',
		dietTypes: [
			{
				title: 'paleo',
			},
			{
				title: 'primal',
			},
		],
	},
	{
		id: 716426,
		title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
		summary:
			'Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199">Vegetable Fried Brown Rice</a>, <a href="https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261">Vegetable Fried Cauliflower Rice</a>, and <a href="https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042">Easy Vegetable Fried Brown Rice with Egg</a>.',
		aggregateLikes: 3689,
		healthScore: 76,
		analyzedInstructions: [
			' 1º step: Remove the cauliflower\'s tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of "cauliflower rice."  ',
			' 2º step: Heat 1T butter and 1T oil in a large skillet over medium heat.  ',
			' 3º step: Add garlic and the white and light green pieces of scallion. Sauté about a minute.  ',
			' 4º step: Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.  ',
			" 5º step: Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.  ",
			' 6º step: Let it sit for about two minutes—so the rice can get toasted and a little crispy.  ',
			' 7º step: Add the peas and broccoli and stir again.  ',
			' 8º step: Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.  ',
			" 9º step: Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.  ",
		],
		diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
		image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg',
	},
	{
		id: 715594,
		title: 'Homemade Garlic and Basil French Fries',
		summary:
			'The recipe Homemade Garlic and Basil French Fries is ready <b>in roughly 45 minutes</b> and is definitely a super <b>vegan</b> option for lovers of American food. One serving contains <b>596 calories</b>, <b>18g of protein</b>, and <b>15g of fat</b>. For <b>83 cents per serving</b>, you get a side dish that serves 2. Several people made this recipe, and 1669 would say it hit the spot. If you have garlic salt, flour, garlic powder, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is outstanding. Try <a href="https://spoonacular.com/recipes/homemade-french-fries-with-fresh-garlic-and-dill-494220">Homemade French Fries with Fresh Garlic and Dill</a>, <a href="https://spoonacular.com/recipes/roasted-garlic-french-fries-519898">Roasted Garlic French Fries</a>, and <a href="https://spoonacular.com/recipes/sweet-potato-fries-with-basil-salt-and-garlic-mayonnaise-120735">Sweet Potato Fries With Basil Salt and Garlic Mayonnaise</a> for similar recipes.',
		aggregateLikes: 1669,
		healthScore: 77,
		analyzedInstructions: 'No hay pasos a seguir',
		diets: ['dairy free', 'lacto ovo vegetarian', 'vegan'],
		image: 'https://spoonacular.com/recipeImages/715594-312x231.jpg',
	},
	{
		id: 715497,
		title: 'Berry Banana Breakfast Smoothie',
		summary:
			'If you have around <b>5 minutes</b> to spend in the kitchen, Berry Banana Breakfast Smoothie might be a tremendous <b>lacto ovo vegetarian</b> recipe to try. This recipe makes 1 servings with <b>501 calories</b>, <b>21g of protein</b>, and <b>11g of fat</b> each. For <b>$2.19 per serving</b>, this recipe <b>covers 32%</b> of your daily requirements of vitamins and minerals. 688 people found this recipe to be tasty and satisfying. It is brought to you by Pink When. Head to the store and pick up graham crackers, soy milk, banana, and a few other things to make it today. It works well as a morn meal. Overall, this recipe earns a <b>super spoonacular score of 100%</b>. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-249239">Berry Banana Breakfast Smoothie</a>, <a href="https://spoonacular.com/recipes/berry-and-banana-oat-breakfast-smoothie-626817">Berry and Bananan Oat Breakfast Smoothie</a>, and <a href="https://spoonacular.com/recipes/berry-breakfast-smoothie-774875">Berry Breakfast Smoothie</a>.',
		aggregateLikes: 689,
		healthScore: 63,
		analyzedInstructions: [
			' 1º step: Take some yogurt in your favorite flavor and add 1 container to your blender.  ',
			' 2º step: Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.  ',
		],
		diets: ['lacto ovo vegetarian'],
		image: 'https://spoonacular.com/recipeImages/715497-312x231.jpg',
	},
	{
		id: 644387,
		title: 'Garlicky Kale',
		summary:
			'Garlicky Kale might be just the side dish you are searching for. This caveman, gluten free, primal, and whole 30 recipe serves 2 and costs <b>69 cents per serving</b>. One serving contains <b>179 calories</b>, <b>3g of protein</b>, and <b>15g of fat</b>. A few people made this recipe, and 17 would say it hit the spot. If you have olive oil, garlic, curly kale, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is awesome. Try <a href="https://spoonacular.com/recipes/garlicky-kale-248759">Garlicky Kale</a>, <a href="https://spoonacular.com/recipes/garlicky-kale-14910">Garlicky Kale</a>, and <a href="https://spoonacular.com/recipes/garlicky-kale-crostini-15010">Garlicky Kale Crostini</a> for similar recipes.',
		aggregateLikes: 19,
		healthScore: 92,
		analyzedInstructions: [
			' 1º step: Heat the olive oil in a large pot over medium heat.  ',
			' 2º step: Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.  ',
			' 3º step: Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.  ',
			' 4º step: Serve hot.  ',
		],
		diets: [
			'gluten free',
			'dairy free',
			'paleolithic',
			'lacto ovo vegetarian',
			'primal',
			'whole 30',
			'vegan',
		],
		image: 'https://spoonacular.com/recipeImages/644387-312x231.jpg',
	},
	{
		id: 716268,
		title: 'African Chicken Peanut Stew',
		summary:
			'Need a <b>gluten free and dairy free main course</b>? African Chicken Peanut Stew could be a tremendous recipe to try. This recipe makes 1 servings with <b>1377 calories</b>, <b>75g of protein</b>, and <b>102g of fat</b> each. For <b>$3.87 per serving</b>, this recipe <b>covers 62%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 124 people have tried and liked this recipe. Head to the store and pick up bell peppers, tomato, pepper, and a few other things to make it today. To use up the tomato you could follow this main course with the <a href="https://spoonacular.com/recipes/pink-peony-popcorn-balls-129348">Pink Peony Popcorn Balls</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. Try <a href="https://spoonacular.com/recipes/african-chicken-peanut-stew-245461">African Chicken Peanut Stew</a>, <a href="https://spoonacular.com/recipes/west-african-peanut-chicken-stew-163315">West African Peanut-Chicken Stew</a>, and <a href="https://spoonacular.com/recipes/one-pot-african-peanut-stew-854978">One-Pot African Peanut Stew</a> for similar recipes.',
		aggregateLikes: 124,
		healthScore: 100,
		analyzedInstructions: [
			' 1º step: Season and Boil the Chicken for 10 minutes with salt, pepper, seasoning, a handful of onions.Once the chicken is ready, in the same stock, Boil the chopped sweet potatoes till its almost cooked. Save the stock in a separate Bowl and the chicken and potatoes in a separate Bowl as well.In a pot, heat up one cooking spoon of oil and fry the chicken till it Browns. Take it out and heat up the other 1.5 cooking spoons of oil and fry the onions, tomatoes Both chopped and Blended, ginger and garlic.  ',
			' 2º step: Add your seasoning, curry, thyme, parsley, salt and pepper to the pot.  ',
			' 3º step: Pour in your stock, chicken and potatoes to cook further.Stir in your peanut Butter and allow to cook for 10 minutes on low heat.If your sauce gets too thick, add a little water to it.  ',
			' 4º step: Serve with white rice or more sweet potatoes.You could also garnish the dish with Bell peppers.     ',
		],
		diets: ['gluten free', 'dairy free'],
		image: 'https://spoonacular.com/recipeImages/716268-312x231.jpg',
	},
];
const creados = [
	{
		id: 'f3af01ca-3f8b-44f7-a959-8031365b221d',
		title: 'Paella',
		summary: 'Arroz con mariscos',
		aggregateLikes: 55,
		healthScore: 44,
		analyzedInstructions: ['Paso 1', 'Paso 2'],
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrVNoeFStTHMg1-ZrlG6P0xkzxXONxf1Y12qp7ib_j857pdDymCftHaolubykKN1FsJE&usqp=CAU',
		dietTypes: [
			{
				title: 'vegetarian',
			},
			{
				title: 'vegan',
			},
		],
	},
	{
		id: 'f87e302d-0031-4f23-a264-386ce4347129',
		title: 'Pizza',
		summary: 'masa redonda y chata con salsa de tomate y queso',
		aggregateLikes: 55,
		healthScore: 44,
		analyzedInstructions: ['Paso 1', 'Paso 2'],
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKN5UB1uSch6ziU34UbzrVsFIJig4jiRUKrmVcQCzXK4XZlhug1SoWhzTX3cQBdJ40E4&usqp=CAU',
		dietTypes: [
			{
				title: 'paleo',
			},
			{
				title: 'primal',
			},
		],
	},
];

payload = ' e ';

const statusFiltered =
	payload === 'All'
		? allRecipes
		: allRecipes.filter((e) => {
				console.log(e.diets),
					e.diets
						? e.diets.includes(payload)
						: e.dietTypes
						? e.dietTypes.map((e) => e.title.includes(payload)).includes(true)
						: null;
		  });

console.log(statusFiltered);

const creadosFiltered =
	payload === 'All'
		? allRecipes
		: creados.filter((e) =>
				e.dietTypes ? e.dietTypes.map((f) => f.title.includes(payload)) : null
		  );

console.log(creadosFiltered);

const verif = creados.filter((e) =>
	e.dietTypes ? e.dietTypes.map((f) => f.title.includes(payload)).includes(true) : null
);
console.log(verif);

dairy free
dairy free