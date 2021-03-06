import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 16px;
  height: 600px;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  flex-grow: 1;
  :hover {
    -webkit-box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
    -moz-box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
    box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
  }
`;
export const TopWrapper = styled.div`
  margin: 16px 0 -15px 40px;
  font-size: 25px;
  font-weight: bold;
`;
export const CenterWrapper = styled.div`
  margin: 0 32px;
  display: flex;
  flex-wrap: wrap;
`;
export const BudgetWrapper = styled.div`
  margin: 8px;
  width: 220px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TopBudget = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    -webkit-box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
    -moz-box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
    box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
  }
  .one {
    color: #85a5ff;
  }
  .two {
    color: #ff85c0;
  }
  .three {
    color: #5cdbd3;
  }
  .four {
    color: #fff566;
  }
  .five {
    color: #d3f261;
  }
`;
export const FooterBudget = styled.div`
  height: 60px;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
`;
export const WordBudget = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
`;
export const NumberBudget = styled.div`
  height: 25px;
  width: 188px;
  margin: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NumberBudgetRight = styled.div`
  margin-right: 16px;
  color: green;
`;
