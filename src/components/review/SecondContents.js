import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { SvgIcon, Typography } from "@mui/material";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import { templateItem } from "../../data/ReviewItemData";

export const SecondContents = () => {
  //   const ItemContainer = (props) => {
  //     return (
  //       <StItemContainer>
  //         <TitleContainer>
  //           <Title variant="h4">Category</Title>
  //         </TitleContainer>
  //         <ContentsContainer>
  //           <ItemBox>
  //             {/* <IconWrapper></IconWrapper> */}
  //             <IconBox component={category1[0].icon} inheritViewBox />
  //             <TextContainer>
  //               <ItemTitle variant="h4">issue template</ItemTitle>
  //               <DecsText variant="subtitle1">
  //                 contributors can select the appropriate template when they open
  //                 new issues in the repository
  //               </DecsText>
  //             </TextContainer>
  //           </ItemBox>
  //           <ItemBox>2</ItemBox>
  //           <ItemBox>3</ItemBox>
  //           <ItemBox>4</ItemBox>
  //         </ContentsContainer>
  //       </StItemContainer>
  //     );
  //   };

  const ItemContainer = (props) => {
    return (
      <ItemBox>
        {/* <IconWrapper></IconWrapper> */}
        <IconBox component={props.icon} inheritViewBox />
        <TextContainer>
          <ItemTitle variant="h4">{props.item}</ItemTitle>
          <DecsText variant="subtitle1">{props.desc}</DecsText>
        </TextContainer>
      </ItemBox>
    );
  };

  const ItemListContainer = (props) => {
    return (
      <StItemListContainer>
        {props.category.map((it) => {
          return (
            <ItemContainer
              key={it.item}
              item={it.item}
              icon={it.icon}
              desc={it.desc}
            />
          );
        })}
      </StItemListContainer>
    );
  };
  return (
    <StSecondContents>
      <ItemListContainer category={templateItem} />
    </StSecondContents>
  );
};
const StSecondContents = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* justify-content: center; */
  flex-direction: column;
  width: 100%;
  height: 100%;

  padding: 5rem 2rem 0 2rem;
  gap: 6rem;

  overflow-y: auto;
`;

const StItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 1rem;
`;

const TitleContainer = styled.div``;
const Title = styled(Typography)``;
const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
  height: 18rem;
  padding: 1.5rem;
  gap: 1rem;
  /* border: 0.1rem solid lightgrey; */
  border-radius: 2rem;
  background-color: ${COLOR.MAIN_WHITE};
  box-shadow: 0rem 0.1rem 2rem lightgrey;
`;
const TopContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
`;

const IconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border: 0.1rem solid ${COLOR.MAIN_NAVY};
  border-radius: 10rem;
`;
const IconBox = styled(SvgIcon)`
  color: ${COLOR.MAIN_NAVY};
  font-size: 3.8rem;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ItemTitle = styled(Typography)`
  font-weight: bolder;
  text-align: left;
`;
const DecsText = styled(Typography)`
  color: ${COLOR.FONT_GRAY};
  font-size: 1.2rem;
  text-align: justify;
`;

const StItemListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
