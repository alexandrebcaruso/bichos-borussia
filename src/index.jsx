import { createRoot } from "react-dom/client";
import App from "./App";

// enable new features in React 18
const root = createRoot(document.getElementById("root"));
root.render(<App />);

// hmr config
if(module.hot) {
    module.hot.accept("./App", function() {
        root.render(<App />);
    });
}

const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        try {
            const registration = navigator.serviceWorker.register('./service-worker.js');
            if (registration.installing) {
                console.log('Service worker installing');
            } else if (registration.waiting) {
                console.log('Service worker installed');
            } else if (registration.active) {
                console.log('Service worker active');
            }
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

registerServiceWorker();
