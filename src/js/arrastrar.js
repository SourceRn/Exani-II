        //funcion para eliminar items de un array
        //function delteItem(arr, item){
        //    return arr.filter(function(e){
        //        return e !== item;
        //    })
        //}
        
        ordenCorrecto = ['producto2', 'producto4', 'producto3', 'producto1'];
        btns = ['repasar','reiniciar','volver','siguiente'];
        ids = [];
        puntuacionTotal = 4;
        puntos = 0;
        var vcaja2 = document.getElementById("caja2");
        var vcaja1 = document.getElementById("caja1");
        var vcaja3 = document.getElementById("caja3");
        var vcaja4 = document.getElementById("caja4");
        var vcaja5 = document.getElementById("caja5");
        cajas = [vcaja1, vcaja2, vcaja3, vcaja4, vcaja5];
        var productos = document.getElementsByClassName("producto");//array

        vcaja1.addEventListener("dragover", (ev) => permitirSoltar(ev));
        vcaja1.addEventListener("drop", (ev) => soltar1(ev));

        vcaja2.addEventListener("dragover", (ev) => permitirSoltar(ev));
        vcaja2.addEventListener("drop", (ev) => soltar2(ev));
    
        vcaja3.addEventListener("dragover", (ev) => permitirSoltar(ev));
        vcaja3.addEventListener("drop", (ev) => soltar3(ev));
            
        vcaja4.addEventListener("dragover", (ev) => permitirSoltar(ev));
        vcaja4.addEventListener("drop", (ev) => soltar4(ev));
            
        vcaja5.addEventListener("dragover", (ev) => permitirSoltar(ev));
        vcaja5.addEventListener("drop", (ev) => soltar5(ev));

        for(var i=0; i<productos.length; i++){
            productos[i].setAttribute("draggable", "true")
            productos[i].setAttribute("id", "producto"+(i+1))                 //Bucle que escribe en el html
            productos[i].addEventListener("dragstart",(ev) => iniciarArrastre(ev))
        }
        
    
        function iniciarArrastre(ev){
            ev.dataTransfer.setData("idproducto",ev.target.id);
            //console.log(ev.target.id) //muestra el id por consola id: ev.target.id
        }

        function permitirSoltar(ev){
            ev.preventDefault();
        }

        function evitarRepeticionDeImagenes(numImagenes, caja, idProducto){
            if (numImagenes <= 1) {
                caja.appendChild(document.getElementById(idProducto));
            }
        }

        function soltar1(ev){
            ev.preventDefault();
            var data1 = ev.dataTransfer.getData("idproducto");
            vcaja1.appendChild(document.getElementById(data1));
        }

        function soltar2(ev){
            ev.preventDefault();
            var data2 = ev.dataTransfer.getData("idproducto");
            //vcaja2.appendChild(document.getElementById(data));
            //console.log(vcaja2.childElementCount);
            //console.log(ev.target.id); //devuelve la caja actual
            //console.log(data); //devuelve el id de producto
            evitarRepeticionDeImagenes(vcaja2.childElementCount, vcaja2, data2);
            ids[0] = data2;
        }
        function soltar3(ev){
            ev.preventDefault();
            var data3 = ev.dataTransfer.getData("idproducto");
            //vcaja3.appendChild(document.getElementById(data));
            //console.log(vcaja3.childElementCount);
            evitarRepeticionDeImagenes(vcaja3.childElementCount, vcaja3, data3);
            ids[1] = data3;
        }
        
        function soltar4(ev){
            ev.preventDefault();
            var data4 = ev.dataTransfer.getData("idproducto");
            //vcaja4.appendChild(document.getElementById(data));
            //console.log(vcaja4.childElementCount);
            evitarRepeticionDeImagenes(vcaja4.childElementCount, vcaja4, data4);
            ids[2] = data4;
        }
        function soltar5(ev){
            ev.preventDefault();
            var data5 = ev.dataTransfer.getData("idproducto");
            //vcaja5.appendChild(document.getElementById(data));
            //console.log(vcaja5.childElementCount);
            evitarRepeticionDeImagenes(vcaja5.childElementCount, vcaja5, data5);
            ids[3] = data5;
        }

        //function newArray(array){
        //    for (let i = 0; i < array.length; i++) {
        //        if ( array[i] === null || array[i] === "" ) {
        //            newArray = delteItem(array, array[i]);
        //        }               
        //    }
        //
        //    return newArray;
        //}
        //resultado.innerHTML = '<h3>Coloca en su lugar todas las imagenes porfavor: <span> Faltan '+(puntuacion-ids.length)+' imagenes</span>';
        //console.log(newArray(arrayPrueba));
        //console.log(arrayPrueba);

        //ifAnswered(answered);

        function validacion(){
            for (let i = 0; i < ids.length; i++) {
                if (ids[i] === ordenCorrecto[i]) {
                    puntos++;
                }
            }
            for (let i = 0; i < btns.length; i++) {
                document.getElementById(btns[i]).removeAttribute('hidden');
            }
            resultado.innerHTML = '<h3>Obtuviste <span>' + puntos + '</span> de <span>' + puntuacionTotal + '</span> puntos <h/3>';
            

            //deshabilitar arrastre

            var vcaja2 = document.getElementById("caja2");
            var vcaja1 = document.getElementById("caja1");
            var vcaja3 = document.getElementById("caja3");
            var vcaja4 = document.getElementById("caja4");
            var vcaja5 = document.getElementById("caja5");

            vcaja1.removeEventListener("dragover", (ev) => permitirSoltar(ev));
            vcaja1.removeEventListener("drop", (ev) => soltar1(ev));

            vcaja2.removeEventListener("dragover", (ev) => permitirSoltar(ev));
            vcaja2.removeEventListener("drop", (ev) => soltar2(ev));
        
            vcaja3.removeEventListener("dragover", (ev) => permitirSoltar(ev));
            vcaja3.removeEventListener("drop", (ev) => soltar3(ev));
                
            vcaja4.removeEventListener("dragover", (ev) => permitirSoltar(ev));
            vcaja4.removeEventListener("drop", (ev) => soltar4(ev));
                
            vcaja5.removeEventListener("dragover", (ev) => permitirSoltar(ev));
            vcaja5.removeEventListener("drop", (ev) => soltar5(ev));

            for(var i=0; i<productos.length; i++){
                productos[i].removeAttribute("draggable", "true")
                productos[i].removeAttribute("id", "producto"+(i+1))                 //Bucle que escribe en el html
                productos[i].removeEventListener("dragstart",(ev) => iniciarArrastre(ev))
            }
        }