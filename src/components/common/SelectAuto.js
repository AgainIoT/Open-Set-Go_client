import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useRecoilState } from "recoil";
import {
  Avatar,
  FormControl,
  InputLabel,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { repoDataAtomFamily } from "../../recoil/repoData";

// props -> type(userName) data(userRepoName) labelText(Owner*)
export const SelectAuto = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(
    repoDataAtomFamily(props.type),
  );

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <StSelectAuto>
      <SelectInputFormControl>
        <SelectLabelWrapper
          shrink
          variant="standard"
          htmlFor={props.labelText}
          id={props.labelText}
        >
          {props.labelText}
        </SelectLabelWrapper>
        <SelectContainer
          labelId={props.labelText}
          id={props.labelText}
          value={selectValue}
          onChange={handleChange}
          autoWidth
          renderValue={(selected) => {
            return (
              <RenderOptionItem>
                <ItmeAvatar
                  src={props.data.find((it) => it.id === selected)?.avatar}
                ></ItmeAvatar>

                <OPtionItemText id={selected} primary={selected} />
              </RenderOptionItem>
            );
          }}
        >
          {props.data.map((option, index) => (
            <MenuOptionItem key={option.id} value={option.id} label={option.id}>
              <OptionItemAvatar>
                <ItmeAvatar src={option.avatar}></ItmeAvatar>
              </OptionItemAvatar>
              <OPtionItemText id={option.id} primary={option.id} />
            </MenuOptionItem>
          ))}
        </SelectContainer>
      </SelectInputFormControl>
    </StSelectAuto>
  );
};

const StSelectAuto = styled.div`
  display: flex;
  width: 100%;
`;

const SelectInputFormControl = styled(FormControl)`
  min-width: 8rem;
  margin: 0.1rem;
`;

const SelectLabelWrapper = styled(InputLabel)`
  display: flex;
  align-items: center;
  transform-origin: center left;
  position: static;
  height: 100%;
  gap: 0.5rem;
  color: ${COLOR.MAIN_BLACK};
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;

  & .MuiFormLabel-root {
    justify-content: center;
    align-items: center;
    transform-origin: center left;
    text-align: center;
  }
`;

const SelectContainer = styled(Select)`
  display: flex;

  & .MuiSelect-select {
    width: 100%;
    height: 4rem;
    padding: 0.5rem 2rem;
  }
  & .MuiInputBase-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .MuiList-root {
    border-radius: 3rem;
  }

  & .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
    background-color: red;
  }

  & .MuiListItemText-root {
    display: flex;
    justify-content: left;
    align-items: flex-end;
  }
  & .MuiTypography-root {
    font-size: 1.4rem;
  }

  & .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
    border-radius: 3rem;
  }
`;

const MenuOptionItem = styled(MenuItem)`
  padding: 1rem 2.5rem;
  border-radius: 1rem;
`;

const RenderOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  min-width: 9rem;
  gap: 3rem;
`;
const OptionItemAvatar = styled(ListItemAvatar)`
  display: flex;
  width: 2.4rem;
`;
const ItmeAvatar = styled(Avatar)`
  display: flex;
  margin: 0;
  &.MuiAvatar-root {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
const OPtionItemText = styled(ListItemText)`
  width: 50%;
  margin: 0;
  & .MuiTypography-root {
    font-size: 1.3rem;
  }
`;
