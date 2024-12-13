var toughts = {}
toughts.thg = {}


function NewThought(){
    let txtarea = document.getElementById('txtNew').value;
    let Category = document.querySelector('input[name="category"]:checked').value;
    let title = document.getElementById('titleThoughts').value;
    let numeroDeItens = localStorage.length;

    toughts.thg[`${numeroDeItens + 1}`] = {'Txt': txtarea, "Category": Category, "title": title}
    //localStorage.setItem(`Thougth-${numeroDeItens}`,  toughts.thg[numeroDeItens + 1])

    createCardThoughts(numeroDeItens + 1)
}

function createCardThoughts(id){
    const newElement = document.createElement('div');

    newElement.innerHTML = generateCard(toughts.thg[id], id);    
    newElement.id = `Thought-${id}`;    
    document.getElementById('Universe').appendChild(newElement);

}

function generateCard(ThougthLocal, id){

    var output = `<section class="bg-custom-indigo rounded-xl h-[240px] w-full shadow-custom-sw grid grid-rows-3 gap-4 truncate">                    
                        <div class="grid grid-cols-3 truncate">
                             <div class="ml-1 mt-1 float-left bg-custom-purple border-2 border-purple-800  rounded-tl-xl rounded-br-[999px]  w-[32px] h-[32px]">
                             </div>

                             <div class="truncate indent-2 mt-4 ml-2 text-nowrap">                                
                                <i class="font-bold text-indigo-950 text-xl absolute">_</i>                                   
                                <h1 class="text-slate-300 text-xl ml-[18px]" title="${ThougthLocal.title}"> ${ThougthLocal.title}</h1>
                            </div>

                            <h1 class="text-white/45  text-right  text-xl font-light mr-3 mt-1 cursor-pointer" onclick="RemoveIt(${id})">X</h1>

                        </div> 

                        <label class="text-gray-200 break-words whitespace-normal ml-8 text-xl font-sans p-3 truncate">
                                 ${ThougthLocal.Txt}
                        </label>
                        
                        
                    </section>`
    return output
}

function RemoveIt(id){

}
function setCategory(Category){
    var model = ``
    switch(Category.toLowerCase()){
        case "idea":
            model = `<div class="border-2 border-yellow-500 rounded-xl h-6 w-28 bg-custom-yellow mt-4 flex justify-center">
                       <label class="rounded-full h-4 w-4 bg-yellow-500 mt-[3px] absolute -ml-[85px]"></label>
                       <h1 class="text-gray-100 ml-2 font-sans -mt-[2px]">Idea</h1>
                     </div>`
            break;
        case"dream":
          model = `<div class="border-2 border-orange-500 rounded-xl bg-custom-orange h-6 w-28  mt-4 flex justify-center">
                        <label class="rounded-full h-4 w-4 bg-orange-500 mt-[3px] absolute -ml-[85px]"></label>
                         <h1 class="text-gray-100 ml-2 font-sans -mt-[2px]">Dream</h1>
                     </div>`
            break;
        case"memory":
          model = `<div class="border-2 border-purple-500 rounded-xl bg-custom-purple h-6 w-28 mt-4 flex justify-center">
                       <label class="rounded-full h-4 w-4 bg-purple-500 mt-[3px] absolute -ml-[85px]"></label>
                        <h1 class="text-gray-100 ml-2 font-sans -mt-[2px]">Memory</h1>
                    </div>`
            break;
        case"daydreams":
          model = `<div class="border-2 border-cyan-500 rounded-xl bg-custom-cyan h-6 w-32 mt-4 flex justify-center"> 
                        <label class="rounded-full h-4 w-4 bg-cyan-500 mt-[3px] absolute -ml-[102px]"></label>
                         <h1 class="text-gray-100 ml-2 font-sans -mt-[2px]">Daydreams</h1>
                     </div>`
             break;
    }
return model
}