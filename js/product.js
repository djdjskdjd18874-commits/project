(async function () {



    var response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Brown Stew Chicken')


    response = await response.json();
    console.log(response);
    var HTMLApiCollection = '';
    for (var chicken of response.meals) {


        HTMLApiCollection +=
            `<div class="d-flex">


                 <div class="col-4 g-4 p-2 ">

                    <div class="p-3  "><img src="${chicken.strMealThumb}"  alt="" class="w-100 h-100">
                        
                    </div>
                    <h2 class="m-3">${chicken.strMeal}</h2>


                </div>
                <div>
                    <h1>Instructions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, non.
                        Perspiciatis possimus
                        culpa, nobis tempora placeat dignissimos cum aut, debitis, esse dolor recusandae quod repellat
                        facere consequatur dolore! Unde eaque dolorum ea sequi aperiam dolorem, tempore dignissimos
                        reprehenderit nulla possimus est eligendi saepe magnam nobis explicabo, earum soluta eum sit.
                    </p>
                    <h3>
                        Area : 

                    </h3>
                    <h3>
                        Category :
                    </h3>
                </div>
                `
    }


    document.querySelector('.row').innerHTML = HTMLApiCollection;


})();










