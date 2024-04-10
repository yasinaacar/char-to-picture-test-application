const allCharBtn=document.getElementById("all-characters-btn");
const allImgBtn=document.getElementById("all-images-btn");
const inputArea=document.getElementById("username-input");
const searchByUsernameBtn=document.getElementById("search-by-username");

const charToPicture="http://127.0.0.1:3000/api/"

allCharBtn.addEventListener("click",()=>{
    fetch(`${charToPicture}character/list`).
    then(characters=> characters.json()).
    then(char=> {
        console.log("Karakterler.....");
        console.log(char)
    }).
    catch(err)//eğer hata oluşursa bu kısmı çalıştır
});

allImgBtn.addEventListener("click",()=>{
    fetch(`${charToPicture}image/list`).
    then(images=> images.json()).
    then(img=> {
        console.log("Resimler.....");
        console.log(img)
    }).
    catch(err =>{
        console.log(err)
    })//eğer hata oluşursa bu kısmı çalıştır
});

searchByUsernameBtn.addEventListener("click",()=>{
    const inputValue=inputArea.value;
    const splitValue=inputValue.substring(0,1);
    console.log(inputValue);
    console.log(splitValue);
    fetch(`${charToPicture}character/?char=${splitValue}`).
    then(character=> character.json()).
    then(char=> {
        console.log(char)
        let card=`
        <div class="col-lg-3">
        
        <div class="card">
                        
                <img src="${char.image.imageUrl}" class="card-img-top" alt="...">
    
                <h5 class="character-name text-center"> ${char.char} </h5>
    
                <span class="statues text-center id='statues'">${char.charUrl}</span>
    
                <ul class="list-group list-group-flush">
    
                    <li class="list-group-item">Char İd: <span class="species"> ${char._id} </span></li>
    
                    <li class="list-group-item">İmage id: <span class="gender"> ${char.image._id}  </span></li>
              
                    <li class="list-group-item">image name: <span class="origin"> ${char.image.imageName}  </span></li>
                </ul>
            </div>
        </div>`
    
        document.querySelector('.card-row').insertAdjacentHTML('beforeend', card);//oluşturduğum kartı html dosyasındaki yerine(card-row adlı class'ın olduğu kısıma) yerleştiriyorum
    }).
    catch(err)//eğer hata oluşursa bu kısmı çalıştır
});

