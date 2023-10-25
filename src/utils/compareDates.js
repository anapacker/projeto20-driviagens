export function compareDates(data1, data2) {

  const partesData1 = data1.split('-');
  const partesData2 = data2.split('-');

  const dia1 = parseInt(partesData1[0], 10);
  const mes1 = parseInt(partesData1[1], 10);
  const ano1 = parseInt(partesData1[2], 10);

  const dia2 = parseInt(partesData2[0], 10);
  const mes2 = parseInt(partesData2[1], 10);
  const ano2 = parseInt(partesData2[2], 10);


  if (ano1 > ano2) {
    return true;
  } else if (ano1 < ano2) {
    return false;
  } else if (mes1 > mes2) {
    return true;
  } else if (mes1 < mes2) {
    return false;
  } else if (dia1 > dia2) {
    return true;
  } else {
    return false;
  }
}