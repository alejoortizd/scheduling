exports.obtenerHorario = function (data) {
  const start = new Date(data.start);
  const end = new Date(data.end);

  let horario = [];
  for(let i = start.getHours(); i < end.getHours(); ++i){
    horario.push(i+":00")
    horario.push(i+":30")
  }
  return horario;
}

exports.obtenerDia = function (data) {
  const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo',];
  const date = new Date(data.start);
  const dayOfWeek = dias[date.getDay()]
  return dayOfWeek;
}

exports.obtenerHoraInicio = function (start) {
  let inicio;
  if(start.getMinutes() == 0) {
    inicio = start.getHours()+":"+start.getMinutes()+"0";
  } else {
    inicio = start.getHours()+":"+start.getMinutes();
  }
  return inicio
}

exports.obtenerHoraFinal = function (end) {
  let fin;
  if(end.getMinutes() == 0) {
    fin = end.getHours()+":"+end.getMinutes()+"0";
  } else {
    fin = end.getHours()+":"+end.getMinutes();
  }
  return fin
}

exports.obtenerFecha = function (data) {
  const fecha = new Date(data.start);
  const date = `${fecha.getMonth() + 1}/${fecha.getDate()}/${fecha.getFullYear()}`;
  return date;
}

exports.obtenerFechaN = function (data) {
  const fecha = new Date(data.start_time);
  const date = `${fecha.getMonth() + 1}/${fecha.getDate()}/${fecha.getFullYear()}`;
  return date;
}
