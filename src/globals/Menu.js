import Home from "../components/Pages/Home";
import Form from "../components/Pages/Form";

const menu = [
	{title: 'Accueil', route: '/accueil', component: Home, public: true},
	{title: 'Formulaire', route: '/formulaire', component: Form, public: true},
]

export default menu;

