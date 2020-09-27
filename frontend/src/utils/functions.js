function formatGenre(genreList) {
  let container = '';

  for (let i = 0; i < genreList.length; i++) {
    container +=
      i !== genreList.length - 1 ? `${genreList[i].name}, ` : genreList[i].name;
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

export { formatRuntime, formatGenre };
