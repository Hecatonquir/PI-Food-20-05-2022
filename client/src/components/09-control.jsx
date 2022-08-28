export default function control(localInput) {
	let verif = [];
	verif.check = 'mal';
	if (!localInput.title) {
		verif.title = 'Missing Name';
	} else if (!localInput.summary) {
		verif.summary = 'Missing Summary';
	} else if (!localInput.healthScore || localInput.healthScore < 0 || localInput.healthScore > 100) {
		verif.healthScore = 'Must Be Between 0 and 100';
	} else if (!localInput.analyzedInstructions) {
		verif.analyzedInstructions = 'Missing Instructions';
	} else if (!localInput.image) {
		verif.image = 'Missing Image';
	} else verif.check = 'bien';
	return verif;
}
