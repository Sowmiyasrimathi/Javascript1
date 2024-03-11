const bp = document.getElementById('bp');
const hra = document.getElementById('hra');
const da = document.getElementById('da');
const tvl = document.getElementById('tvl');.3
const pf = document.getElementById('pf');
const gross = document.getElementById('gross');
const netsly = document.getElementById('netsly');
const print = document.getElementById('print');
const tbody = document.getElementById('tbody');
const table = document.getElementById('table');


bp.addEventListener('keyup',()=>{
    let bpvalue=parseInt(bp.value);
    hra.value=bpvalue/10
    da.value=Math.round(bpvalue*0.05).toFixed(2)
    tvl.value=Math.round(bpvalue*0.15).toFixed(2)
    pf.value=Math.round(bpvalue*0.15).toFixed(2) 
    netsly.value=parseInt(hra.value)+parseInt(da.value)+parseInt(tvl.value)+parseInt(pf.value)
    gross.value=bpvalue-parseInt(netsly.value)
})

print.addEventListener('click',()=>{
    if(bp.value!=''){
        tbody.innerHTML+=`<tr>
        <td>${bp.value}</td>
        <td>${hra.value}</td>
        <td>${da.value}</td>
        <td>${tvl.value}</td>
        <td>${pf.value}</td>
        <td>${gross.value}</td>
        <td>${netsly.value}</td>
        
        </tr>`
        table.style.visibility="visible"
    }
    else{
        alert("Enter Basic Pay value")
    }
    
})