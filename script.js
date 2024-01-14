
	let checkboxgroup = document.getElementById("container").getElementsByTagName("input");
console.log(checkboxgroup);	
let limit = 2;
	for (let i = 0; i < checkboxgroup.length; i++) {
		checkboxgroup[i].onclick = function() {
			let checkedcount = 0;
				for (let i = 0; i < checkboxgroup.length; i++) {
				checkedcount += (checkboxgroup[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
				console.log("You can select maximum of " + limit + " checkbox.");
				// alert("You can select maximum of " + limit + " checkbox.");
				this.checked = false;
				const g = document.querySelector('#good');
				const c = document.querySelector('#cheap');
				if(g.checked){
					g.checked=false;
					c.checked=true;
				}
				// if(c.checked){
				// }
			}
		}
	}









// const f = document.querySelector('#fast');
// const tog = document.querySelectorAll('.toggle')
// let count = 0;
// let arr = Array.from(tog);
// arr.forEach((toggle)=>{
//     toggle.addEventListener('click', (e)=>{
//         if(toggle.checked){
// 			count++;
// 		}
// 		if(count>2){
// 			alert("You cant check more than one");
// 			count = 0;
// 			if(g.checked && c.checked){
// 				if(f.checked){
// 		            f.checked=false;
// 				}
// 	        }
// 	        else if(g.checked){
// 	            if(f.checked){
// 					if(c.checked){
// 						c.checked=false;
// 					}
// 		            c.disabled=true;
// 	            }
// 	            else{
// 					// c.checked=true;
// 	                c.disabled=false;
// 	            }
// 	        }
// 	        else if(c.checked){
// 	            if(f.checked){
// 					if(g.checked){
// 						g.checked=false;
// 					}
// 		            g.disabled=true;
// 	            }
// 	    //         else{
// 					// // g.checked=true;
// 	    //             g.disabled=false;
// 	    //         }
// 	        }
// 	        // else{
// 	        //     toggle.disabled=false;
// 	        // }

// 		}
// 		toggle.disabled=false;
//     })
// })