import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <div style={{ display: "flex", paddingTop: 20 }}>
                <div style={{ flex: "100px 0 0" }}>
                    <img src="/imgaes/3.png" alt="logo" style={{ display: "block", width:90}} />
                </div>
                <Header as="h1">무야호 닷컴</Header>
            </div>
            <Gnb />
        </div>
    );
}
