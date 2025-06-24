   export default (cat)=>` <li>
                    <img src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg" alt="Black Cat">
                    <h3>Pretty Kitty</h3>
                    <p><span>Breed: </span>Bombay Cat</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>`