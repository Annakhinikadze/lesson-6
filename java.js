let currentPage=1;
let totalpages;

function getUsers(page){
    function renderPage(){
        let response = this.responseText;
        let responseData=JSON.parse(response);
        console.log(responseData);

        const fragment = document.createDocumentFragment();

        responseData.data.forEach(element => {
            let li = document.createElement('li');
            let p = document.createElement('p');

            p.textContent = element.first_name + " " + element.last_name;

            let image = document.createElement('img');
            image.src = element.avatar;
            li.appendChild(image);
            li.appendChild(p);
            fragment.appendChild(li);
            });       
        
        document.getElementById('list').innerHTML = " ";
        document.getElementById('list').appendChild(fragment);
        totalpages=responseData.total_pages;
    }

    function errorrender(){
        if(error = 404) {
            let p = document.createElement('p');
            p.textContent = 'Page Not Found';
            document.getElementById('api').appendChild(p);
            p.style.color = 'red';
        } else if (error = 500){
            let p = document.createElement('p');
            p.textContent = 'Server Error';
            document.getElementById('api').appendChild(p);
            p.style.color = 'red';}
        }

    

    let requist = new XMLHttpRequest();
    requist.addEventListener('load', renderPage);
    requist.addEventListener("error", errorrender);
    requist.open('GET',"https://reqres.in/api/users?page=" + page);
    requist.send();

    document.getElementById('loadprev').addEventListener('click', function () {
   
    if(currentPage == 1){
        return;
    }

    currentPage -=1;
    getUsers(currentPage);

});

document.getElementById('loadnext').addEventListener('click', function () {
    if(currentPage == totalpages){
        return;
    }
    currentPage +=1;
    getUser(currentPage);

});

}

document.getElementById('loadprev').addEventListener('click', function () {
   
    if(currentPage == 1){
        return;
    }

    currentPage -=1;
    getUsers(currentPage);

});

document.getElementById('loadnext').addEventListener('click', function () {
    if(currentPage == totalpages){
        return;
    }
    currentPage +=1;
    getUsers(currentPage);

});


getUsers(currentPage);

// FETCH

// let currentPage=1;
// let totalpages;

// function getUsersAjax(page){
//     fetch("https://reqres.in/api/users?page=" + page,{
//         method:"GET",
//     })
//         .then(function (response) {
//             if(response.status !== 200) {
//                 throw response.status;
//             }
//             return response.json();
//         })
//         .then(function (responseData) {
//             const fragment = document.createDocumentFragment();
           
            // responseData.data.forEach(element => {
            // let li = document.createElement('li');
            // let p = document.createElement('p');

            // p.textContent = element.first_name + " " + element.last_name;

            // let image = document.createElement('img');
            // image.src = element.avatar;
            // li.appendChild(image);
            // li.appendChild(p);
            // fragment.appendChild(li);
            // });       
           
            // document.getElementById('list').innerHTML = " ";
            // document.getElementById('list').appendChild(fragment);
            // totalpages=responseData.total_pages;
                
//         })
//         .catch(function (error) {
            // if(error = 404) {
            //     let p = document.createElement('p');
            //     p.textContent = 'Page Not Found';
            //     document.getElementById('api').appendChild(p);
            //     p.style.color = 'red';
            // } else if (error = 500){
            //     let p = document.createElement('p');
            //     p.textContent = 'Server Error';
            //     document.getElementById('api').appendChild(p);
            //     p.style.color = 'red';
//             }
            
//         });
// }

// document.getElementById('loadprev').addEventListener('click', function () {
   
//     if(currentPage == 1){
//         return;
//     }

//     currentPage -=1;
//     getUsersAjax(currentPage);

// });

// document.getElementById('loadnext').addEventListener('click', function () {
//     if(currentPage == totalpages){
//         return;
//     }
//     currentPage +=1;
//     getUsersAjax(currentPage);

// });

// getUsersAjax(currentPage);