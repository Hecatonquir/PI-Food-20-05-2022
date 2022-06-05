export default function control(localInput) {
	let verif = [];
	if (!localInput.title) {
		verif.title = 'Insertar Nombre de la receta';
	}
	if (!localInput.summary) {
		verif.summary = 'Insertar un resumen';
	}
	if (localInput.healthScore < 0 || localInput.healthScore > 100) {
		verif.healthScore = 'La puntuación tiene que ser un número entre 0 y 100';
	}
	if (localInput.image.length > 255) {
		verif.image = 'La url es demasiado grande! Elegí una imagen con menos de 255 caracteres.';
	}
	return verif;
}
