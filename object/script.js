function fprint(msg){

    console.log(msg);
}

var person = {
    name : ['Bob', 'Smith'],
    age: 32,
    gender : 'male',
    interests: ['nusic', 'skiing'],
    gretting: function(custom){
        console.log("Hi " + custom + ", I\'m " + this.name[0] + '.');
    }
};
////////
fprint(person.name);
fprint(person.name[1]);
fprint(typeof(person.age));
person.gretting("Jason");

person.money = 1000;
fprint(person.money);
person['tall'] = 175;
fprint(person.tall);