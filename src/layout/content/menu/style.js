import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 16px;
  width: 346px;
  height: 420px;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .active {
    -webkit-box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
    -moz-box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
    box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
  }
`;
export const TopMenuWrapper = styled.div`
  width: 320px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
export const MenuWrapper = styled.div`
  margin: 8px;
  width: 320px;
  height: 64px;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  :hover {
    -webkit-box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
    -moz-box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
    box-shadow: 2px 2px 8px 1px rgba(20, 20, 20, 0.15);
  }
`;
export const MenuWrapperLeft = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-left: 18px;
  font-size: 20px;
  :visited {
    color: red;
  }
`;
