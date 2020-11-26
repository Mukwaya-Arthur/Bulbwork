new Vue({
    el : '#app',
    data(){
       return{
           imageSource:'../images/banana.jpg',
           signal:false,
           title:"Catalyst 006 Students",
           students : [],
           studentToBeAdded: "",
           url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fvuejs.org%2Fimages%2Flogo.png&imgrefurl=https%3A%2F%2Fvuejs.org%2F&tbnid=S3z7yPQSQ6oGDM&vet=12ahUKEwikwbmg75DtAhUP4RoKHQ4mDnIQMygBegUIARDPAQ..i&docid=cyNqoBL03abX0M&w=400&h=400&itg=1&q=vue%20js%20logo&ved=2ahUKEwikwbmg75DtAhUP4RoKHQ4mDnIQMygBegUIARDPAQ",
           users: [
            { name: 'Arthur' }, 
            { name: 'Marieh' }, 
            { name: 'Mariat' }, 
            ],
            users: [
                { name: 'Arthur',show: true }, 
                { name: 'Marieh',show: false }, 
                { name: 'Mariat',show: true }, 
            ],
            username: 'Arthur',
           content: '<h1>Hello World</h1>',
           context: '<h2>Hope You are good today?</h2>',
           href: 'https://nexladder.com', 
		        imgsrc: 'https://nexladder.com/images/nexlogo.png',
       }
    },
    methods :{
        addstudent:function(){
            this.students.push(this.studentToBeAdded);
        }
    }
    
});

