import React, { Component } from 'react'

export class chat extends Component {
    componentDidMount() {

        (function (d, m) {
            var kommunicateSettings =
                { "appId": "2ca2dd7849f4272015f588499b7ca4d1f", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
        

    }
    render() {
        return (
            <div>
                <h1>NurseBot</h1>
            </div>
        )
    }
}

export default chat