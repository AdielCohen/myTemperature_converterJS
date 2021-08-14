    // Var list
    var c = document.querySelector("#input_C");
    var f = document.querySelector("#input_F");
    var res, x = -1;
    // Object list
    document.querySelector("#cal_BTN").addEventListener("click", lastClick);
    document.querySelector("#del_BTN").addEventListener("click", resetClick);
    document.querySelector("#input_F").addEventListener("click", lastClick); 
    document.querySelector("#input_C").addEventListener("click", lastClick);
    document.querySelector("#input_F").addEventListener("input", inputF);
    document.querySelector("#input_C").addEventListener("input", inputC); 
    // function list
    function resetClick() {
        f.value = "", c.value = "", x = -1; 
    }
    function inputC() {
        res = ((+c.value)*1.8)+32;
        x = 1;
    }
    function inputF() {
        res = ((+f.value)-32)/1.8;
        x = 2;  
    }
    function lastClick() {
        switch (x) {
            case x = 1:
                if (c.value != "")
                    f.value = +res;              
                break;
            case x = 2:
                if (f.value != "")
                    c.value = +res;
                break;
            default:
                x = -1;
        }
    }
