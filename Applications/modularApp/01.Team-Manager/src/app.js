import page from "../node_modules/page/page.mjs";

import showCreatePage from "./views/create.js";
import showDashboardPage from "./views/dashboard.js";
import showDetailsPage from "./views/details.js";
import showEditPage from "./views/eidt.js";
import showHomePage from "./views/home.js";
import showLoginPage from "./views/login.js";
import showProfilePage from "./views/profile.js";
import showRegisterPage from "./views/register.js";


page('/',showHomePage)
page('/login',showLoginPage)
page('/register',showRegisterPage)

page('/dashboard',showDashboardPage)
page('/create',showCreatePage)
page('/profile',showProfilePage)

page('/details/:id',showDetailsPage)
page('/edit/:id',showEditPage)

page.start()
