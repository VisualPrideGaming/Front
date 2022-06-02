import React, { useState } from "react";
import { Tabs, Tab} from "react-bootstrap"

import Snake from "../snake/snake";
import TicTacToe from "../tictactoe/tictactoe";

const Minigame = () => {    
    const [key, setKey] = useState('snake');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            fill
        >
            <Tab eventKey="snake" title="Snake">
                <Snake />
            </Tab>
            <Tab eventKey="tictactoe" title="Tres en Raya">
                <TicTacToe />
            </Tab>
        </Tabs>
    )
}

export default Minigame;