import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 16px;
  width: 1055px;
  height: 720px;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  display: inline-block;
`;
export const TopWrapper = styled.div`
  margin: 16px 40px -15px 40px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const CenterWrapper = styled.div`
  margin: 0 32px;
  display: flex;
  flex-wrap: wrap;
`;
export const BudgetWrapper = styled.div`
  height: 120px;
  width: 100%;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;
export const CenterWrapperLeft = styled.div`
  height: 100px;
  width: 130px;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  .red {
    color: #ff9c6e;
  }
  .green {
    color: #95de64;
  }
`;
export const ProjectBudget = styled.div`
  height: 80px;
  width: 80%;
  border: 2px solid #69c0ff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .PB {
    color: #69c0ff;
  }
`;
