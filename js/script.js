

document.addEventListener("DOMContentLoaded", function () {
    getLocalToughts()
    countage()
    document.getElementById('form-Top').addEventListener('submit', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do formulário
        handleFormSubmit();
    });
    
    // Coloque aqui seu código para manipular elementos do DOM
  });


function countage(){

    const textarea = document.getElementById('txtNew');
    const charCount = document.getElementById('charCount');

  textarea.addEventListener('input', function() {
    const remainingChars = 125 - textarea.value.length;
    charCount.textContent = remainingChars;
  });

}

function getLocalToughts(){
    let keyToughtLocal = Object.keys(localStorage);

    keyToughtLocal.forEach(keyThought => {
        createCardThoughts(keyThought);
    });
   
    
}

function getFormValues() {
    const txtarea = document.getElementById('txtNew').value.trim();
    const categoryInput = document.querySelector('input[name="category"]:checked');
    const Category = categoryInput ? categoryInput.value : null;
    const title = document.getElementById('titleThoughts').value.trim();
    
    return { txtarea, Category, title };
}

function isFormValid({ txtarea, Category, title }) {
    if (!txtarea || !Category || !title) {
        const missingFields = [];
        if (!txtarea) missingFields.push("Description");
        if (!Category) missingFields.push("Category");
        if (!title) missingFields.push("Title");
        
        alert(`Please check the following data: ${missingFields.join(", ")}`);
        return false;
    }
    return true;
}

function newThought(txtarea, Category, title) {
    const numberItems = localStorage.length;
    const thoughtId = `Thought-${numberItems}`;
    const thoughtData = {
        id: numberItems + 1,
        Txt: txtarea,
        Category,
        title,
    };

    localStorage.setItem(thoughtId, JSON.stringify(thoughtData));
    createCardThoughts(thoughtId); // Adiciona ao DOM
}

function handleFormSubmit() {
    try {
        const { txtarea, Category, title } = getFormValues();

        if (!isFormValid({ txtarea, Category, title })) {
            return; 
        }

        newThought(txtarea, Category, title);
        cleanForm(); // Limpa o formulário após salvar
    } catch (error) {
        console.error("Error:", error);
        alert("Sorry, an error occurred. Try again.");
    }
}

function createCardThoughts(key){
    const newElement = document.createElement('div');

    newElement.innerHTML = generateCard(localStorage.getItem(key), key.split('-')[1]);    
    newElement.id = key;    
    document.getElementById('Universe').appendChild(newElement);

}

function generateCard(ThougthLocal, id){
    let arrayThought = tranformJson(ThougthLocal);
    let colorConfiguration = categoryStyle(arrayThought.Category);
    let output = `<section class="bg-custom-indigo rounded-xl h-[240px] w-full shadow-custom-sw grid grid-rows-6  truncate">   

                        <div class="grid grid-cols-6 truncate">
                             <div class="border-2 rounded-tl-[36px] rounded-br-[100px]  max-w-[40px] h-[40px] ${colorConfiguration}"></div>
                             <div class="truncate mt-4 text-nowrap col-span-4">                                                                                             
                                <h1 class="text-slate-200 text-xl" title="${arrayThought.title}"> 
                                <span class="font-bold text-indigo-950 text-xl">_</span><b>${arrayThought.title}</b></h1>
                             </div>
                             <h1 class="text-white/45  text-right  text-xl font-light mr-3 mt-1 cursor-pointer" onclick="removeIt('Thought-${id}')">X</h1>
                        </div> 

                        <div class="items-center flex row-span-4">
                            <h1 class="text-gray-300 text-wrap ml-5 text-lg font-sans p-3 truncate  ">${arrayThought.Txt}</h1>
                        </div>
                        
                        <div class="grid grid-cols-2">
                                <label class="text-slate-300  ml-6"><span class="inline-block rounded-xl  w-3 h-3 border-2 ${colorConfiguration} mr-1"></span>${arrayThought.Category}</label>
                                <div class="border-2 rounded-tl-[90px] rounded-br-[15px]  w-[105px] h-[55] justify-self-end -mt-10 ${colorConfiguration}"></div>
                        </div>
                    </section>`;
    return output;
}

function removeIt(id){
     document.getElementById(id).remove();
     localStorage.removeItem(id);
}

function categoryStyle(Category){
    let model = ``;

    switch(Category.toLowerCase()){
        case "idea":
            model = `bg-custom-yellow border-yellow-500`;
            break;
        case"dream":
          model = `bg-custom-orange  border-orange-500`;
            break;
        case"memory":
          model = `bg-custom-purple  border-purple-500`;
            break;
        case"random":
          model = `bg-custom-cyan   border-cyan-500`;
             break;
    }
    return model;
}

function tranformJson(Json){
    let convert = JSON.parse(Json);
    return convert;
}

function cleanForm(){
    document.getElementById('titleThoughts').value = '';
    document.getElementById('txtNew').value = '';
    document.querySelector('input[name="category"]:checked').checked = false;
}