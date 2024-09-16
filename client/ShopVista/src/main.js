import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/routes";
import store from "./stores/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import {faAddressBook}  from "@fortawesome/free-regular-svg-icons";
import { faXmark ,faBars,faHouse, faBagShopping,
    faAddressCard,faCartShopping,faRightToBracket,faSearch,faCircleArrowRight,faMagnifyingGlass,faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";
//
library.add(faXmark,faBars,faHouse,faBagShopping,
    faAddressCard,faCartShopping,faRightToBracket,faSearch,faCircleArrowRight,faCircleChevronRight);
const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon,faBagShopping);
app.use(router);
app.use(store);
app.mount("#app");
