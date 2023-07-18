import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { handleTabChange } from "../../store/slices/weather";

const Tabs = () => {

    const activeTab = useAppSelector(s => s.weather.activeTab);
    const dispatch = useAppDispatch();
    const tabs = useAppSelector(s => s.weather.tabs);

    const content = tabs.map(tab =>
        <Tab
            active={activeTab === tab}
            key={tab}
            onClick={() => dispatch(handleTabChange(tab))}
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