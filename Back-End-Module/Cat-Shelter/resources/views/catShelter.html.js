export default `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../content//styles/site.css">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <title>Cat Shelter</title>
</head>

<body>
    <header>
        <nav>
            <ul class="navigation">
             <li><a href="/">Home Page</a></li>
                <li><a href="/cats/add-breed">Add Breed</a></li>
                <li><a href="/cats/add-cat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
    </header>
    <main>
        <form action="#" method="" class="cat-form">
            <h2>Shelter the cat</h2>
            <img src="https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_1280.jpg" alt="">
            <label for="name">Name</label>
            <input type="text" id="name" value="Pretty Kitty" disabled>
            <label for="description">Description</label>
            <textarea id="description" disabled>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</textarea>
            <label for="group">Breed</label>
            <select id="group" disabled>
                <option value="Fluffy Cat">Fluffy Cat</option>
            </select>
            <button>SHELTER THE CAT</button>
        </form>
    </main>
</body>


</html>`