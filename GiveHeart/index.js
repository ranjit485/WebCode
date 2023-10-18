 
        function ThrowHeart() {
            const con = document.getElementsByClassName('container');

            const parent = document.createElement("div");
            parent.id = 'parent';
            parent.className = 'heartBox';
            const img = document.createElement('img');
            img.src = 'Heart.png';
            parent.appendChild(img);
            document.body.appendChild(parent);
            setInterval(() => {
                parent.remove();

            }, 7980);
        }