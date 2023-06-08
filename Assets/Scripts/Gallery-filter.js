<script>
    let list = document.querySelectorAll('.list');
    let totalPictures = document.querySelectorAll('.gallery-Images');

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function() {
            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove('active');
            }
            this.classList.add('active');

            let dataFilter = this.getAttribute('data-filter');

            for (let k = 0; k < totalPictures.length; k++) {
                totalPictures[k].classList.remove('active');
                totalPictures[k].classList.add('hide');

                if (totalPictures[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
                    totalPictures[k].classList.remove('hide');
                    totalPictures[k].classList.add('active');
                }
            }
        })
    }
</script>
