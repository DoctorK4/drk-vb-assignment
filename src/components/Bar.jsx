import styled from "styled-components";

const barbg = "#FAF0E1"

const barType = {
  header: '10%',
  input: '15%',
}

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${barbg};
  height: ${({ type }) => barType[type] && barType['header']};
`

export default Bar;
