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

    newElement.innerHTML = generateCard(toughts.thg[id]);    
    newElement.id = `Thought-${id}`;    
    document.getElementById('Universe').appendChild(newElement);

}

function generateCard(ThougthLocal){

    var output = `<div class="bg-custom-indigo rounded-xl h-[240px] w-full shadow-custom-sw grid grid-rows-3 gap-4 truncate">
                        <div class="grid grid-cols-2 truncate">
                            <h1 class="text-slate-300 text-nowrap truncate text-xl indent-2 mt-4 ml-2" title="${ThougthLocal.title}"><i class="font-bold text-indigo-950">_</i>${ThougthLocal.title}</h1>
                            <h1 class="text-white/45  text-right  text-xl font-light mr-3 mt-1 cursor-pointer">X</h1>
                        </div>  

                        <div class="p-2">
                             <label class="text-white break-words whitespace-normal h-20 w-60">
                                 ${ThougthLocal.Txt}
                             </label>
                             
                             <label class="text-white">tes test tstaba</label>
                        <div>

                    </div>`
    return output
}