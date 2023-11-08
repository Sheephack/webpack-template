export default function Accordions(wrapper) {    
    var acc = wrapper.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        if (!acc[i].hasAttribute('data-clicked')) {
            acc[i].setAttribute('data-clicked', 'true');
            acc[i].classList.add('active');
            let panel = acc[i].nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + 'px';
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }
}

