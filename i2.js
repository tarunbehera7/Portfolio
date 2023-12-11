// /* ==== menu icon navbar   ==== */
// let menuIcon = document.querySelector('#menu-icon');
// let navbar   = document.querySelector('.navbar');

// // menuIcon.onclick = () => {
// //     menuIcon.classList.toggle('bx-x');
// //     navbar.classList.toggle('active');
// // };

// let clickCount = 0;

// menuIcon.onclick = () => {

//     // // ======  1  =====
//     // menuIcon.classList.toggle('bx-x');
//     // navbar.classList.toggle('active');


//     // // Check if the navbar is active
//     // const isNavbarActive = navbar.classList.contains('active');

//     // ////==== Toggle the display property ====
//     // if( isNavbarActive) {
//     //     navbar.style.display = 'block';
//     // }
//     // else {
//     //     navbar.style.display = 'none';
//     // }

//     // // Check the screen width
//     // const screenWidth = window.innerWidth;
//     // // // Check if the screen width is one of the specified values
//     // // if( [768, 984, 1024, 1240].includes(screenWidth) && isNavbarActive) {
//     // //     // Hide the navbar
//     // //     navbar.style.display = 'none';
//     // // } else {
//     // //     // For other screen sizes or when opening the menu, show the navbar
//     // //     navbar.style.display = 'block';
//     // // }

//     // if (clickCount % 2 === 0) {
//     //     // If the click count is even, it's the second click
//     //     if (screenWidth === 768) {
//     //         // For the second click on 768px screen size, close the navbar
//     //         navbar.style.display = 'none';
//     //     }
//     // } else {
//     //     // For odd click counts (first click), show the navbar
//     //     navbar.style.display = 'block';
//     // }




//     // ======   2   =======
//     if (window.innerWidth <= 768) {
//         // Only perform this behavior for screen sizes less than or equal to 768px
//         clickCount++;

//         if (clickCount % 2 === 1) {
//             // Odd click count, open the navbar
//             menuIcon.classList.add('bx-x');
//             navbar.classList.add('active');
//         } else {
//             // Even click count, close the navbar
//             menuIcon.classList.remove('bx-x');
//             navbar.classList.remove('active');
//         }
//     } 
//     else{
//         // For screen sizes greater than 768px, always make sure the navbar is visible
//         menuIcon.classList.remove('bx-x');
//         navbar.classList.add('active');
//     }
// }


// // ==== Sticky Navbar ====
// //
// window.onscroll = () => {

//     let header = document.querySelector('.header');
//     header.classList.toggle('sticky', window.scrollY > 100);
// };





////====== Get the menu icon and the navigation menu======
// const menuIcon = document.getElementById('#menu-icon');
// const navbar = document.getElementById('navbar');
//
//// Add a click event listener to the menu icon
// menuIcon.addEventListener('click', () => {
//
//     //  =====  1  =====
//     // if (navbar.style.display === 'block') {
//     //     // If the navbar is visible, hide it
//     //     navbar.style.display = 'none';
//     // } else {
//     //     // If the navbar is hidden, show it
//     //     navbar.style.display = 'block';
//     // }
//
//     //  ===== 2  =====
//     // navbar.classList.toggle("show-links");
//
//
//     console.log('Menu icon clicked!'); // Add this line to log a message
//     navbar.classList.toggle('show-links');
// });







////====== Correct ======
//
//
// document.addEventListener('DOMContentLoaded', function() {
//     // // Your JavaScript code here
//     // const menuIcon = document.querySelector('#menu-icon');
//     // const navbar = document.querySelector('.navbar');

//     // menuIcon.addEventListener('click', () => {
//     //     console.log('Menu icon clicked!');
//     //     navbar.classList.toggle('show-links');
//     // });


//     const menuIcon = document.querySelector('#menu-icon');
//     const navbar = document.querySelector('.navbar');
//     let isNavbarOpen = false;

//     menuIcon.addEventListener('click', () => {
//         if (window.innerWidth <= 768) {
//             if (isNavbarOpen) {
//                 navbar.classList.remove('show-links');
//             } else {
//                 navbar.classList.add('show-links');
//             }
//             isNavbarOpen = !isNavbarOpen;
//         }
//     });
// });





// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
//
//
document.addEventListener('DOMContentLoaded', function () {

    console.log('DOM content loaded');

    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    const firstBtn = document.querySelector('#firstBtn');
    let isNavbarOpen = false;

    menuIcon.addEventListener("click", () => {
        // menu-icon and navbar are targetting diff things
        //     that's why this was possible in this case.
        // Else u hv to target same ele selector if they were
        //     both in same class..
        console.log('Menu icon clicked');
        
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');

        if(window.innerWidth <= 768) {
            if (isNavbarOpen) {
                navbar.classList.remove('show-links');
            } else {
                navbar.classList.add('show-links');
            }
            isNavbarOpen = !isNavbarOpen;
        }
    });

    // ==== Remove 'menu-icon' navbar when click navbar link(scroll) ====
    // menuIcon.classList.remove('bx-x');
    // navbar.classList.toggle('active');

    navbar.addEventListener("click", () => {

        console.log('Menu icon closed');
        if(window.innerWidth <= 768) {
            if (isNavbarOpen) {
                navbar.classList.remove('show-links');
            } else {
                navbar.classList.add('show-links');
            }
            isNavbarOpen = !isNavbarOpen;
        }
    });


    
    // Check if the element is found
   

        // console.log('Element #firstBtn found:');

        // Add an event listener
        firstBtn.addEventListener("click", () => {
            // console.log('Button clicked!');
        });

    // function downloadResume() {
    //     
    //     // // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    //     // var resumePath = 'D:\\Web-D\\Projects\\JS Projects\\Portfolio-1\\resume.pdf';
    
    //     // // Open the resume in a new tab
    //     // window.open(resumePath, '_blank');
    // }
    
    // // Attach the click event listener to elements with the class "btn"
    // document.querySelectorAll('.btn').forEach(function (btn) {
    //     btn.addEventListener('click', downloadResume);
    // });


});





