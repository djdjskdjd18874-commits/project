 
 const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});
 
 
 
 
 
 
searchName.addEventListener('input', () => {
    
    var searchNameValue = searchName.value;
    if (searchNameValue !== '') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchNameValue}`)
            .then((response) => response.json())
            .then((data) => {

                var SearchInformation = data.meals
                 
                


                var htmlCollection = ``
                for (var information of SearchInformation) {
                    htmlCollection += `

            <div class=" col-3 gy-3 p-3">
                  <div class="image-container">
                     <a href="#">
                    <img src="${information.strMealThumb}" class="border-0 rounded-3 w-100"  alt="">
               </a> 
               <div class="image-overlay">
                            <h1>
                            ${information.strMeal}


                            </h1>
                            <h4>
                           Area:${information.strArea}
                            </h4>
                            <p>
                           strInstructions:${information.strInstructions.slice(0,200)}

                            </p>

                        </div>
                 </div>
             </div>

        `
                    
                }



searchContent.innerHTML = htmlCollection

            });
    }
});


searchChar.addEventListener('input', () => {
    var searchCharValue = searchChar.value;
    if (searchCharValue !== '') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchCharValue}`)
            .then((response) => response.json())
            .then((data) => {

                var SearchInformation = data.meals
                console.log(SearchInformation);


                var htmlCollection = ``
                for (var information of SearchInformation) {
                    htmlCollection += `

            <div class="col-3 gy-3 p-3 ">
                 <div class="image-container">
                        <a href="#">
                            <img src="${information.strMealThumb}" class=" w-100" alt="">
                        </a>

                        <div class="image-overlay">
                            <h1>
                            ${information.strMeal}


                            </h1>
                            <h4>
                           Area:${information.strArea}
                            </h4>
                            <p>
                           strInstructions:${information.strInstructions.slice(0,200)}

                            </p>

                        </div>
                    </div>
             </div>

        `
                    searchContent.innerHTML = htmlCollection
                }




            });
    }
});
