class Account{
    constructor(firstName, lastName, age, gender){
        this.firstName = firstName || "shola";
        this.lastName= lastName || "love";
        this.age = age;
        this.gender = gender;
    }
        getFirstName(){
            return this.firstName;
        }
        setFirstName(){
            return this.firstName=this.firstName;
        }
    
}
    class BamkAccount extends Account{
        constructor(firstName, lastName, age, gender){
            super(firstName, lastName, age, gender)
            this.balance = this.balance;
            this.accountNumber = this.accountNumber;
        }

            getBalance(){
                return this.balance;
            }

            setBalance(balance) {
                return this.balance = this.balance;
            }
        
    }
    let acct = new BamkAccount()
    console.log(acct.setBalance());
    console.log(acct.getBalance());
    console.log(acct)
