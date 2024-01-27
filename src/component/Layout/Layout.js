import React, {useState, useEffect, Children} from "react";
import Header from "./Header/header";
import { Outlet } from "react-router";
import Footer from "./Footer/footer";
import { useLocation } from "react-router";

const Layout = props => {
    const { children } = props;

    const {pathname} = useLocation();
    const [text, setText] = useState("");
    const [speaker, setSpeaker] = useState(false);

    const changeSpeakSwitcher = value => {
        setSpeaker(value);
    };

    useEffect(() => {
        document.onmouseup = () => {
            if (speaker && text !== window.getSelection().toString()) {
                window.responsiveVoice.speak(window.getSelection().toString(), "Russian Female");
                setText(window.getSelection().toString());
            }
        };
    }, [speaker]);

    return (
        <>
            <div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
                <>
                        <Header speaker={speaker} changeSpeakSwitcher={changeSpeakSwitcher} />
                            <div className="page-content">{children}</div>
                        <Footer />
                      </>
               
            </div> 
        </>
    );
};

export default Layout;
