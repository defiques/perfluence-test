import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FC } from "react";
import { TabsLabelsType, TabType } from "../WeatherStats/WeatherStats";


interface TabsProps {
    tabs: TabsLabelsType,
    activeTab: string,
    setActiveTab: (value: TabType) => void
}

const Tabs:FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {

    const content = tabs.map(tab =>
        <Tab
            active={activeTab === tab}
            key={tab}
            onClick={() => setActiveTab(tab)}
        >
            {tab}
        </Tab>
    )

    return (
        <TabContainer>
            {content}
        </TabContainer>
    );
};

const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 15px;
`

interface TabProps {
    active?: boolean
}

const Tab = styled.div<TabProps>`
  color: gainsboro;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  ${({active}) => 
    active && 
          css`
            color: coral; 
            border-bottom: 2px solid coral
          `
}
`

export default Tabs;