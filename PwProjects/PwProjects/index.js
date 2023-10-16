
let dynamic_Content = {}
let amount = 0;
let count = 1;
let state;

const Deposite = document.getElementById("depo");
const withdrawal = document.getElementById("withd");
const history = document.getElementById("h");
const Balance = document.getElementById("bal"); 
const commonButton = document.getElementById("common-button");
const innerScreen = document.querySelector("#inner-screen")
const Back = document.getElementById("GoToHome");

// USER INTERFACE (UI) FOR DEPOSITE 
 Deposite.addEventListener("click", ()=> {
   
 userInterface("Deposite", "flex", "none");
 state = "Deposite";

 if(dynamic_Content.hasOwnProperty("Deposite")){
    dynamic_Content.Deposite.style.display = "block";
 }
 else{
    dynamic_Content.Deposite = document.createElement("div");
    dynamic_Content.Deposite.id = "div-Deposite";
    innerScreen.appendChild(dynamic_Content.Deposite)

    // LABEL
    dynamic_Content.Deposite.label =  document.createElement("label");
    dynamic_Content.Deposite.label.className = "moneyLabel";
    dynamic_Content.Deposite.label.setAttribute("for", "input-deposite");
    dynamic_Content.Deposite.label.textContent = "Entre Deposite Amount : ";
    dynamic_Content.Deposite.appendChild(dynamic_Content.Deposite.label);

     // INPUT
     dynamic_Content.Deposite.input = document.createElement("input");
     dynamic_Content.Deposite.input.className = "moneyInput";
     dynamic_Content.Deposite.input.id = "input-deposite";
     dynamic_Content.Deposite.input.setAttribute("type", "number");
     dynamic_Content.Deposite.appendChild(dynamic_Content.Deposite.input);

     // EVENT LISTENER 
     dynamic_Content.Deposite.input.addEventListener("input", (e) =>{
        amount = e.target.value;
         commonButton.style.display = "block"
     })
 }
});
 


 // USER INTERFACE (UI) FOR WITHDRAWL 
withdrawal.addEventListener("click", () => {
   userInterface("withdrawal", "flex", "none");
   state = "withdrawal"; 

   if(dynamic_Content.hasOwnProperty("withdrawal")){
      dynamic_Content.withdrawal.style.display = "block";
   }
   else{
      dynamic_Content.withdrawal = document.createElement("div");
      dynamic_Content.id = "div-Withdrawal";
      innerScreen.appendChild(dynamic_Content.withdrawal);

      // LABEL 
      dynamic_Content.withdrawal.label = document.createElement("label");
      dynamic_Content.withdrawal.label.className = "moneyLabel";
      dynamic_Content.withdrawal.label.setAttribute("for" ,"input-withdrawal")
      dynamic_Content.withdrawal.label.textContent = "Entre Withdrawal Amount : ";
      dynamic_Content.withdrawal.appendChild(dynamic_Content.withdrawal.label);

      // INPUT

      dynamic_Content.withdrawal.input = document.createElement("input");
      dynamic_Content.withdrawal.input.className = "moneyInput";
      dynamic_Content.withdrawal.input.id = "input-withdrawal"
      dynamic_Content.withdrawal.input.setAttribute("type","number");
      dynamic_Content.withdrawal.appendChild(dynamic_Content.withdrawal.input);

      // EVENT LISTENER
      dynamic_Content.withdrawal.input.addEventListener("input", (e) =>{
         amount = e.target.value;
         commonButton.style.display = "block"
      })
   }
})

// USER INTERFACE (UI) FOR HISTORY 
history.addEventListener("click", () => {
 userInterface("history", "flex", "none");  
 state = "history";

 dynamic_Content.history = document.createElement("div");
 dynamic_Content.history.id = "div-History";
 innerScreen.appendChild(dynamic_Content.history);

//  CREATING HEADER
dynamic_Content.history.header = document.createElement("header");
dynamic_Content.history.appendChild(dynamic_Content.history.header)

//INSIDE HEADER CREATRING HEADING
dynamic_Content.history.header.dateCol = document.createElement("h3");
dynamic_Content.history.header.dateCol.textContent = "Date";
dynamic_Content.history.header.appendChild(dynamic_Content.history.header.dateCol);

dynamic_Content.history.header.typeCol = document.createElement("h3");
dynamic_Content.history.header.typeCol.textContent = "Type";
dynamic_Content.history.header.appendChild(dynamic_Content.history.header.typeCol);

dynamic_Content.history.header.amountCol = document.createElement("h3");
dynamic_Content.history.header.amountCol.textContent = "Amount";
dynamic_Content.history.header.appendChild(dynamic_Content.history.header.amountCol);

dynamic_Content.history.header.timeCol = document.createElement("h3");
dynamic_Content.history.header.timeCol.textContent = "Time";
dynamic_Content.history.header.appendChild(dynamic_Content.history.header.timeCol);

// HISTORY CONTENT UI
dynamic_Content.history.transHist = document.createElement("main");
dynamic_Content.history.appendChild(dynamic_Content.history.transHist);


// generating data for histoty 
for(let i=(info.customer_1.balanceHistory.length - 1); i>=0; i--){

   dynamic_Content.history.transHist[`transHist${i}`] = document.createElement("div");
   dynamic_Content.history.transHist.appendChild(dynamic_Content.history.transHist[`transHist${i}`]);
   
   // now inside div we need to add 4 h3 to add the transaction history
   dynamic_Content.history.transHist[`transHist${i}`].entreDate = document.createElement("h3");
   dynamic_Content.history.transHist[`transHist${i}`].entreDate.textContent = info.customer_1.balanceHistory[i].date;
   dynamic_Content.history.transHist[`transHist${i}`].appendChild(dynamic_Content.history.transHist[`transHist${i}`].entreDate);

   dynamic_Content.history.transHist[`transHist${i}`].entreType = document.createElement("h3");
   dynamic_Content.history.transHist[`transHist${i}`].entreType.textContent = info.customer_1.balanceHistory[i].type;
   dynamic_Content.history.transHist[`transHist${i}`].appendChild(dynamic_Content.history.transHist[`transHist${i}`].entreType);

   dynamic_Content.history.transHist[`transHist${i}`].entreAmount = document.createElement("h3");
   dynamic_Content.history.transHist[`transHist${i}`].entreAmount.textContent = info.customer_1.balanceHistory[i].amount;
   dynamic_Content.history.transHist[`transHist${i}`].appendChild(dynamic_Content.history.transHist[`transHist${i}`].entreAmount);

   dynamic_Content.history.transHist[`transHist${i}`].entreTime = document.createElement("h3");
   dynamic_Content.history.transHist[`transHist${i}`].entreTime.textContent = info.customer_1.balanceHistory[i].time;
   dynamic_Content.history.transHist[`transHist${i}`].appendChild(dynamic_Content.history.transHist[`transHist${i}`].entreTime);

   // creating a horizontal line  
   dynamic_Content.history.transHist[`hr${i}`] = document.createElement("hr");
   dynamic_Content.history.transHist.appendChild(dynamic_Content.history.transHist[`hr${i}`]);
}
dynamic_Content.history.footer = document.createElement("footer");
dynamic_Content.history.appendChild(dynamic_Content.history.footer);

dynamic_Content.history.footer.totalBal = document.createElement("h3");
dynamic_Content.history.footer.totalBal.textContent = `Current Balance : ${info.customer_1.balanceAmount}`;
dynamic_Content.history.footer.appendChild(dynamic_Content.history.footer.totalBal)

 }) 
  
// USER INTERFACE UI FOR  BALANCE 
Balance.addEventListener("click", () => {
   userInterface("Balance", "flex", "none");
   state = "balance"

   dynamic_Content.balance = document.createElement("div");
   dynamic_Content.balance.id = "div-balance";
   innerScreen.appendChild(dynamic_Content.balance);

//   paragraph tag for available balance
dynamic_Content.balance.messagePara = document.createElement("p");
dynamic_Content.balance.messagePara.innerHTML = `Mr.${info.customer_1.firstName} ${info.customer_1.lastName} , in your account remaining balance is <span>Rs.${info.customer_1.balanceAmount}/-</span>`;
dynamic_Content.balance.appendChild(dynamic_Content.balance.messagePara);
})

// FUNCTIONALITY OF BACK BUTTON
Back.addEventListener("click", () => {
   userInterface("Home", "none", "flex");
   // dynamic_Content.balance.messagePara.textContent = "";

   // removing submit button
   if(state == "Deposite" || state == "withdrawal"){
      commonButton.style.display = "none"

      // hiding previous screen data
      dynamic_Content[state].style.display = "none";
   }
   else{
      dynamic_Content[state].remove(); 
   }
})

// SUBMIT BUTTON FOR BOTH DEPOSITE AND WITHDRAWAL
commonButton.addEventListener("click", () => {
   amount = Number(amount);
   if(amount){
      if(state === "Deposite"){
         info.customer_1.balanceAmount = info.customer_1.balanceAmount + amount;
         const date = new Date();

         info.customer_1.balanceHistory[count] = {
            type : "Deposite",
            amount : amount,
            date : date.toLocaleDateString(), 
            time : date.toLocaleTimeString()
         }
         
         alert("Transaction Successful ✅✅✅✅✅✅ ! ! \n Money Added To Your Account");
      }
      else{
        
         info.customer_1.balanceAmount = info.customer_1.balanceAmount - amount;
         const date = new Date();

         info.customer_1.balanceHistory[count] = {
            type : "withdrawal",
            amount : amount,
            date : date.toLocaleDateString(),
            time : date.toLocaleTimeString()
         }
         if(amount > info.customer_1.balanceAmount){
            alert("Transaction Unsuccessful ⚠️⚠️⚠️⚠️⚠️ ! !\n Not sufficient balance for withdrawal ")
            return undefined;
         }
         alert("Transaction Successfully ✅✅✅✅✅!! \n Money Deducted");
      }
      // empty input box
      dynamic_Content[state].input.value = "";
      commonButton.style.display = "none"
      count++ ;
   }
   else{
      alert("please enter amount ! !");
      return undefined;
   }
})

function userInterface(state, back, screen){
   // changing section text-content
   document.getElementById("Home-section").textContent = state;

   // Enable back button view
   document.getElementById("GoToHome").style.display = back;

   // disable the view of four button ( deposite, withdrawal, history, balance)
   document.getElementById("front-screen").style.display = screen ;
}

const info = {
   customer_1 : {
      firstName : "Nitish",
      lastName : "kumar", 
      balanceAmount : 5000,
      balanceHistory : [
         {
            type : "Deposite",
            amount : 5000,
            date : "5/14/2023",
            time : "7:19:10 AM"
         },
         {
            type : "Deposite",
            amount : 5000,
            date : "5/14/2023",
            time : "7:19:10 AM"
         }
      ]
   }
}