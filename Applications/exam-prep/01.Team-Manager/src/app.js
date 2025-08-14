import page from "../node_modules/page/page.mjs"


import showCreate from "./views/create.js";
import showDashboard from "./views/dashboard.js";
import showDetails from "./views/details.js";
import showEdit from "./views/edit.js";
import showHome from "./views/home.js";
import showLogin from "./views/login.js";
import showProfile from "./views/profile.js";
import showRegister from "./views/register.js";



page('/', showHome)
page('/login', showLogin)
page('/register', showRegister)

page('/dashboard', showDashboard)
page('/create', showCreate)
page('/profile', showProfile)

page('/details/:id', showDetails)
page('/edit/:id', showEdit)

page()
