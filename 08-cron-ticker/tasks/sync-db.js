let times = 0;

// Cada asterisco tiene un significado:
// segundo minuto hora dia_mes mes dia_semana
//
// En el ejemplo va a escribir en consola cada 5 segundos
const syncDB = () => {
  times++;
  console.log('Tick cada 5 segundos: ', times);

  return times;
};

module.exports = {
  syncDB,
};
