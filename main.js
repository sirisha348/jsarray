const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "c", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //for loop


 for(i=0;i<=companies.length;i++){
   console.log(companies[i]);
 }

 //forEach

 companies.forEach(function(company)
  {
    console.log(company.name);
   
 });

//filter

// const canDrink = ages.filter(function(age) {
   // if(age >= 21) {
   //  return true;
   // }
   //});

 //console.log(canDrink);

const canDrink=ages.filter(age=>age>=21);
console.log(canDrink);


//const retailCompanies = companies.filter(function(company) {
  //  if(company.category === 'Retail') {
   //   return true;
   // }
 //});

 const retailCompanies=companies.filter(company=>company.category==='Retail')
 console.log(retailCompanies);

 const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

 console.log(lastedTenYears);

 //map

 const companyNames = companies.map(function(company) {
   return company.name;
  });

 console.log(companyNames);

  
 const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);

const mul=ages.map(age=>age*2)
console.log(mul);

const ageMap = ages.map(age => Math.sqrt(age))
  console.log(ageMap);

//sort

const sortYear=companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortYear);

const sortAges=ages.sort((a,b)=>(a-b))
console.log(sortAges);

//reduce

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);


const total=ages.reduce((a,b)=>a+b)
console.log(total);


const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);


const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);