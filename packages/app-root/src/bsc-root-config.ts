import { registerApplication, start } from "single-spa";
import {
	constructApplications,
	constructRoutes,
	constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const data:any = {
  loaders: {
    loading: `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`,
    settings:''
  }
}


const routes = constructRoutes(microfrontendLayout,data);
const applications = constructApplications({
	routes,
		loadApp({ name }) {
		return System.import(name);
	},
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
