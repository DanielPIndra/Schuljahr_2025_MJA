function Säugetier (Name, Alter, Rasse, Farbe){
    this.name = Name;
    this.Alter = Alter;
    this.Rasse = Rasse;
    this.Farbe = Farbe; 
    
}

for( i = 0; i<30; i++ ){
    console.log(new Säugetier(Math.random(),Math.random(), Math.random(),Math.random() ));
}