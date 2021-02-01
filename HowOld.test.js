const calculateAge = require( './HowOld' );

test( 'Standard', () => {
  expect(
    calculateAge( new Date( 2019, 1, 2 ), new Date( 2020, 1, 1 ) )
  ).toStrictEqual( { years: 0, months: 11, days: 30 } )
  expect(
    calculateAge( new Date( 2019, 1, 2 ), new Date( 2020, 1, 2 ) )
  ).toStrictEqual( { years: 1, months: 0, days: 0 } )
  expect(
    calculateAge( new Date( 2019, 1, 2 ), new Date( 2020, 1, 3 ) )
  ).toStrictEqual( { years: 1, months: 0, days: 1 } )
} );

