loadItems();

async function loadItems() {
    
    let res = await fetch(" https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
             <div class="col">
        <div class="card shadow-sm">
            <img src="${element.flags.png}" alt="Flag of ${element.name.common}" width="395px" height="300px">
            <h2>${element.name.common}</h2>
            <div class="card-body">
                <p class="card-text">Population: ${element.population}</p>
                <p class="card-text">Region: ${element.region}</p>
                <p class="card-text">Capital: ${element.capital ? element.capital[0] : "N/A"}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        
                        
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                </div>
            </div>
        </div>
    </div>
        `;

        
        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}