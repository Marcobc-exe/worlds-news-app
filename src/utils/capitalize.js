/**
 * Capitaliza toda la cadena de texto entregada
 * @param {string} str
 * @returns retorna cada palabra del texto en forma capitalizada
 * @author Marco Urrea Briones
 */
export const capitalizeSentence = (str) => {
  const sentence = str.toLowerCase();
  const words = sentence.split(" ");

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};


/**
 * Capitaliza la primera palabra de la cadena de texto entregada
 * 
 * @param {string} str - texto a capitalizar
 * @returns retorna el texto capitalizado
 * @author Marco Urrea Briones
 */
export const capitalizeText = (str) => {
	const lowerText = str.toLowerCase();
	return str.charAt(0).toUpperCase() + lowerText.slice(1);
};