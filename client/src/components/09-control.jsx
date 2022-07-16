export default function control(localInput) {
	let verif = [];
	verif.check = 'mal';
	if (!localInput.title) {
		verif.title = 'Insertar Nombre de la receta';
	} else if (!localInput.summary) {
		verif.summary = 'Insertar un resumen';
	} else if (
		!localInput.healthScore ||
		localInput.healthScore < 0 ||
		localInput.healthScore > 100
	) {
		verif.healthScore = 'La puntuación tiene que ser un número entre 0 y 100';
	} else if (!localInput.analyzedInstructions) {
		verif.analyzedInstructions = 'Inserte algunos pasos a seguir!!';
	} else if (!localInput.image) {
		verif.image = 'Insertá una imagen!!';
	} else verif.check = 'bien';
	return verif;
}
