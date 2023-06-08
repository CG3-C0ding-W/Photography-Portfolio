<script>
    let list = document.querySelectorAll('.list');
    let pictureBox = document.querySelectorAll('.pictureBox');

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function() {
            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove('active');
            }
            this.classList.add('active');

            let dataFilter = this.getAttribute('data-filter');

            for (let k = 0; k < pictureBox.length; k++) {
                pictureBox[k].classList.remove('active');
                pictureBox[k].classList.add('hide');

                if (pictureBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
                    pictureBox[k].classList.remove('hide');
                    pictureBox[k].classList.add('active');
                }
            }
        })
    }
</script>
