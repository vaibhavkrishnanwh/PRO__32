class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option");
    


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.m2 = createElement("h3");
    this.m3 = createElement("h4");



    this.message = createElement("h2");
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.m2("QUESTION: Who is the MP of Silvassa?");
    this.m2.position(350,50);

    this.m3 = (`1. Mohan Delkar</br>
    2.Praful Patel </br>
    3.Kala Ben </br>
    4.Manoj Kotak`)
    this.m3.position(350,100);
               
              





    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message - ('Thank You, Your Answer Has Been Submitted');
      this.message.position(350,200);
    })


  }
}
