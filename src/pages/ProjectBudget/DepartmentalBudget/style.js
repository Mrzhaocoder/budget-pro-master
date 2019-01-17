import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 16px;
  width: 1000px;
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
  flex-direction: column;
`;
export const TopDepartmentalWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const TopCenterWrapper = styled.div`
  width: 100px;
  height: 100%;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.long {
    margin-left: 17px;
    width: 200px;
    font-size: 10px;
    color: #bfbfbf;
  }
`;
