const person = {
    firstname: "john",
    lastname: "doe",
    id : 5556,
    fullname : function myfunction() {
        return this.firstname + "  " + this.lastname;
    },
    secondfullname : `$firstname`+`$lastnaem`;
    
}