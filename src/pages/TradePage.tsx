import React from "react";
import TradingForm from '../components/TradingForm';
import { TYPOGRAPHY } from "../constsants/constants";

const TradePage: React.FC = () => {


    return (
        <div>
            <TradingForm title={TYPOGRAPHY.EXCANGE_TITLE}/>
        </div>
    );
}

export default TradePage;
