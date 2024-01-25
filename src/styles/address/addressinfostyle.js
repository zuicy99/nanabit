import styled from "@emotion/styled";

export const AddressInfoWrap = styled.div`
  width: 1155px;
  height: 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #d9d9d9;
  margin: 0 auto;
  h2 {
    margin-left: 50px;
    font-size: 20px;
    font-weight: 500;
    color: #575757;
  }
  button {
    width: 211px;
    height: 70px;
    border: none;
    background: #e9b25f;
    color: #fff;
    font-size: 20px;
    margin-right: 22px;
  }
`;

export const AddressTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1155px;
  height: 190px;

  margin: 50px auto;
  border-bottom: 1px solid #868686;
  h2 {
    font-size: 70px;
    font-weight: 500;
    color: #e9b25f;
  }
  p {
    color: #868686;
    font-size: 20px;
    font-style: normal;
    font-weight: 350;
    span {
      font-weight: 700;
    }
  }
`;
