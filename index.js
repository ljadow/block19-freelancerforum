//declaring the state -- starting list of freelancers
let avgPrice = 1; //average price variable
const names = ["Albert", "Betty", "Catherine", "Daniel", "Eloise", "Freddy", "Gabrielle", "Henry", "Isabel", "Jack"];
const occupations = ["Firefighter", "Marketer", "Artist", "Lawyer", "Banker", "Consultant", "Advertiser","Teacher", "Professor"];
const startingPrices = [40, 60, 90, 10, 30, 70, 100, 20];
const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70 }
]

const addNew = setInterval(addFreelancer, 3000)
render(); //render the initial list of freelancers

function render() {
    const freelancer = document.querySelector("#freelancers");
    const freelancerElements = freelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.append(`${freelancer.name}, ${freelancer.occupation}, ${freelancer.startingPrice}`);
        return element;
    });
    //console.log(freelancerElements);
    freelancer.replaceChildren(...freelancerElements);

    const price = document.querySelector("#avgPrice");
    price.replaceChildren(`The average price for these ${freelancers.length} freelancers is $${averagePrice()}`)

}

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)]
    const occupation = occupations[Math.floor(Math.random() * occupations.length)]
    const startingPrice = startingPrices[Math.floor(Math.random() * startingPrices.length)]

    freelancers.push({ name, occupation, startingPrice });

    render();

    if (freelancers.length === 25) {
        clearInterval(addNew)
      }
}

function averagePrice() {
    let totalPrice = 0;
    freelancers.forEach((ele) => {
        totalPrice += ele.startingPrice
    })
    avgPrice = Math.round(totalPrice / freelancers.length)
    return avgPrice

}

