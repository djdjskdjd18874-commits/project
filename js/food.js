


const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});






(async function () {



    var response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken')


    response = await response.json();
    console.log(response);
    var HTMLApiCollection = '';
    for (var chicken of response.meals) {

        HTMLApiCollection +=
            `<div class="col-6 col-lg-3 g-3">
                <div class="position-relative image-container  ">
                    <a href="#">
                          <img src="${chicken.strMealThumb}"  class="border-0 rounded-3 w-100 "   alt="">
                          
                     </a>
                      <div class="image-overlay">
                            <h2>
                            ${chicken.strMeal}

                            </h2>
                            <p>

                            </p>
                        </div>
                </div>
            </div>
                `
    }


    document.querySelector('.row').innerHTML = HTMLApiCollection;


})();





