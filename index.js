    window.addEventListener("load", function () {
            setTimeout(function () {
                load.style.display = 'none';
            }, 1000);



        });
        const load = document.getElementById('loader');

        const inputbox = document.getElementById('inputbox');
        const btn = document.getElementById('btn');
        const print = document.getElementById('print');
        let cgpa;
        let cgpa_st;
        btn.onclick = function () {
            cgpa = inputbox.value;
            cgpa = Number(cgpa);

            cgpa_st = inputbox.value;

            if (cgpa_st == '') {
                print.textContent = "pls input CGPA grade";

            }

            else if (cgpa >= 3.50 && cgpa <= 4.00) {
                print.textContent = "DISTINCTION";
            }

            else if (cgpa >= 3.00 && cgpa <= 3.49) {
                print.textContent = "UPPER CREDIT";

            }
            else if (cgpa >= 2.50 && cgpa <= 2.99) {
                print.textContent = "LOWER CREDIT";

            }
            else if (cgpa >= 2.00 && cgpa <= 2.49) {
                print.textContent = "PASS";

            }


            else if (cgpa >= 0.00 && cgpa <= 1.99) {
                print.textContent = "FAIL";

            }


            else {
                print.textContent = "invalid CGPA";

            }
        }
