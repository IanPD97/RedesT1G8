module.exports = {

  verificarDigito: ({ rut }) => {
    let multiplicador = 0;
    const rutSeparado = rut.split("-");
    const suma = rutSeparado[0]
      .split('')
      .filter(isDigit)
      .reverse()
      .map(digito => {return digito * ( 2 + (multiplicador++) % 6) })
      .reduce((suma, valor) => { return suma + valor }, 0);
    const modulo = 11 - (suma % 11);
    let verificador = modulo;
    if (modulo === 11) verificador = '0';
    if (modulo === 10) verificador = 'K';

    return { verificador: (rutSeparado[1] == verificador) };
  },

  generarNombrePropio: ({ sexo, nombre, apellidoPaterno, apellidoMaterno }) => {
    const formatoNombrePropio = nombre => { return nombre[0].toUpperCase() + nombre.slice(1).toLowerCase(); }
    const prefijo = (sexo === 'M') ? "Sr." : "Sra.";
    const nombresFormato = nombre
      .split(' ')
      .filter(nombre => { return (nombre !== '') })
      .map(formatoNombrePropio);
    const apellidoPaternoFormato = formatoNombrePropio(apellidoPaterno);
    const apellidoMaternoFormato = formatoNombrePropio(apellidoMaterno);
    return { nombrePropio: [prefijo, ...nombresFormato, apellidoPaternoFormato, apellidoMaternoFormato].join(' ') };
  }

};

function isDigit(n) {
  return Boolean([true, true, true, true, true, true, true, true, true, true][n]);
}