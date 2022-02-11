import { LightningElement } from "lwc";

export default class App extends LightningElement {
  

// name = "";
// idade = 27;
// tel = "(11) 25644-0000";
// cpf= "698.667.544-04";
// email = "gabi@gmail.com";
// soulCode =  "https://www.soulcodeacademy.org/";
// img1 = "https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Emblem.png"

  name ='';
  idade ='';
  tel ='';
  cpf ='';
  soulCode ='';
  email ='';
  img1 = "https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Emblem.png"

// gabriella =
  
//    {
//      this.name = "Gabriella",
//      idade = 27,
//      tel = "(11) 25644-0000",
//      cpf= "698.667.544-04",
//      email = "gabi@gmail.com",
//      soulCode =  "https://www.soulcodeacademy.org/",
//      img1 = "https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Emblem.png"
//   }
 

   visible = true;

  trocarDiv(){
        //this.visible = !this.visible;
        if(this.visible == true){
            this.visible = false;
        }
        else   {
            this.visible = true;
        } 
            
    }

  alterar(){
     if (this.name == ""){
            this.name = "Cleitinho Rasta";    
            this.idade = 30;
            this.tel = '(21) 2365-8888';
            this.cpf =' 236.654.321-99';
            this.email = 'cletinho@rasta.com';
            this.soulCode = "https://www.salesforce.com/br/";
          } else {
            this.name = "Gabriella";
            this.idade = 27;
            this.tel = "(11) 25644-0000";
            this.cpf= "698.667.544-04";
            this.email = "gabi@gmail.com";
            this.soulCode =  "https://www.soulcodeacademy.org/";
            this.img1 = "https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Emblem.png"
          }
   
    }

    // alterarValores(){
    //   this.name = "Cleitinho Rasta";
    //   this.idade = 30;
    //   this.tel = '(21) 2365-8888';
    //   this.cpf =' 236.654.321-99';
    //   this.email = 'cletinho@rasta.com';
    //   this.soulCode = "https://www.salesforce.com/br/";
    // }  
    // retomaValor(){
    //   console.log(gabriella);

    //   this.name = "Gabriella";
    //   this.idade = 27;
    //   this.tel = "(11) 25644-0000";
    //   this.cpf= "698.667.544-04";
    //   this.email = "gabi@gmail.com";
    //   this.soulCode =  "https://www.soulcodeacademy.org/";
    //   this.img1 = "https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Emblem.png"
    // }
  
}