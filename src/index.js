import React, {Suspense} from "react";
import {createRoot} from "react-dom/client";
import "./assests/style/global.scss"
import "./assests/style/header.scss"
import "./assests/style/footer.scss"
import Routes from "./App";
import i18n from "./serves/i18n";
import {I18nextProvider} from "react-i18next";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import store from "./reduxToolkit/store";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="">
            <Provider store={store}>
                <Routes/>
            </Provider>
        </Suspense>
    </I18nextProvider>
);
