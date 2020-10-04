function formatGenre(genreList) {
  let container = '';

  if (genreList) {
    for (let i = 0; i < genreList.length; i++) {
      container +=
        i !== genreList.length - 1
          ? `${genreList[i].name}, `
          : genreList[i].name;
    }
  }

  return container;
}

function formatRuntime(runTimeInMins) {
  // 60 mins = 1hr
  const rtHrs = Math.floor(runTimeInMins / 60);
  const rtMins = runTimeInMins % 60;

  // check if rthrs == 0
  if (rtHrs === 0) return `${runTimeInMins}mins`;

  let container = rtHrs > 1 ? `${rtHrs}hrs ` : `${rtHrs}hr `;
  container +=
    rtMins === 0 ? '' : rtMins > 1 ? `${rtMins}mins` : `${rtMins}min`;
  return container;
}

function formatRevenue(value, digits) {
  var si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (value >= si[i].value) {
      break;
    }
  }
  return (value / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
}

export { formatRuntime, formatGenre, formatRevenue };
