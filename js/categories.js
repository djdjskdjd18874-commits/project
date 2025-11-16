(async function () {



    var response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')


    response = await response.json();
    console.log(response);
    var HTMLApiCollection = '';
    for (var categorie of response.categories) {

        HTMLApiCollection +=
            `<div class="col-6 col-lg-3 col-lg-3 g-3">
                <div class="image-container" >
                    <a href="#">
                          <img src="${categorie.strCategoryThumb}" class=" rounded-3 w-100 "   alt="">
                     </a>
                <div class="image-overlay">
                        <h2>
                          ${categorie.strCategory}
                        </h2>
                        <p>
                           ${categorie.strCategoryDescription.slice(0,200) }
                        </p>
                    </div>
                </div>
              </div>
                `
    }


    document.querySelector('.row').innerHTML = HTMLApiCollection;


})();
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});

