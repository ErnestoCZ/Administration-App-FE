import { styled } from 'styled-components';

export const OutletWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-around;
  background: linear-gradient(to top, #fff, #05d9f5);
`;

// export const ContentBox = styled(Box)`
// flex-direction: column;
// background-color: aliceblue;
// border-radius: 1vh;
// margin: 1%;
// width: 100%;
// `

type FlexBoxDirection = 'row' | 'column';
export const Box = styled.div`
  display: block;
`;

export const FlexBox = styled.div<{ $direction?: FlexBoxDirection }>`
  display: flex;
  flex-direction: ${(props) => props.$direction || 'row'};
`;

export const VStack = styled(FlexBox)`
  flex-direction: column;
`;

export const StyledContentStackBasis = styled.div<{ $direction?: string }>`
  background-color: aliceblue;
  border-radius: 1vh;
  width: 100%;
  padding: 1vh;
  display: ${(props) => props.$direction};
`;

export const StyledContentStackEntry = styled.div`
  margin: 0%;
  background-color: blue;
  padding: 1vh;
  border-radius: 1vh;
`;
