function howOld( birthDate, till = new Date() ) {

  let years = ( till.getFullYear() - birthDate.getFullYear() );
  let lastToTillYearBirthDate = new Date(
    till.getFullYear() - 1,
    birthDate.getMonth(),
    birthDate.getDate(),
  );
  let months = -1, days = -1;

  /** YEAR **/
  if ( (
    till.getMonth() < birthDate.getMonth()
    || till.getMonth() === birthDate.getMonth()
  ) && till.getDate() < birthDate.getDate()
  ) {
    --years;
  }

  /** MONTH **/
  while ( lastToTillYearBirthDate.getTime() <= till.getTime() ) {
    months++;
    lastToTillYearBirthDate.setMonth( lastToTillYearBirthDate.getMonth() + 1 );
  }

  /*If month is equal to 12 then resetting to zero to mark it as complete year*/
  months %= 12;

  /** DAYS **/
  /* Moving to previous month of till month to calculate days remaining */
  lastToTillYearBirthDate.setMonth( lastToTillYearBirthDate.getMonth() - 1 )
  while ( lastToTillYearBirthDate.getTime() <= till.getTime() ) {
    days++;
    lastToTillYearBirthDate.setDate( lastToTillYearBirthDate.getDate() + 1 );
  }

  return {
    years,
    months,
    days,
  }
};

module.exports = howOld;
