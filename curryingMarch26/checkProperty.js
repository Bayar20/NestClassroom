const chocolates = [
    {"dark": true,  "flavour":"strawberry"},
    {"dark": false, "flavour":"strawberry"},
    {"dark": false, "flavour":"almond"},
    {"dark": true,  "flavour":"almond"},
    {"dark": false, "flavour":"lemon"},
  ];
  
  // Chocolates array object өгөгджээ. Тухайн arrays -аас ямарч field -ын 
//   утгаар нь шүүх боломжтой currying function бич (checkProperty).

const checkProperty = (key) => {
    return (value) => {
        return (item) => {
            return item[key] == value
        }
    }
}
  
const darkChocolates = chocolates.filter( checkProperty("dark")(true) );
    console.log(darkChocolates);


const almondChocolates = chocolates.filter( checkProperty("flavour")("almond") );
    console.log(almondChocolates );