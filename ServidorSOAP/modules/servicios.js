module.exports = {

  verificarDigito: ({ rut }) => {
    let multiplicador = 2;
    const suma = rut
      .split('')
      .reverse()
      .map(digito => { if (multiplicador === 7) multiplicador = 2; return digito * (multiplicador++) })
      .reduce((suma, valor) => { return suma + valor }, 0);
    const modulo = 11 - (suma % 11);
    if (modulo === 11) return { verificador: 0 };
    if (modulo === 10) return { verificador: 'K' };
    return { verificador: modulo };
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
