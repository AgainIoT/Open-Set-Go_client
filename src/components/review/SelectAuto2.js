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

export const SelectAuto2 = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(
    props.dataState(props.type),
  );

  const handleChange = (event) => {
    setSelectValue(event.target.value);
    props.setIsSelectOwner(true);
  };

  return (
    <StSelectAuto2>
      <SelectInputFormControl>
        <SelectLabelWrapper
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
          // autoWidth
          renderValue={(selected) => {
            return (
              <RenderOptionItem>
                <ItmeAvatar
                  src={props.data.find((it) => it.owner === selected)?.avatar}
                ></ItmeAvatar>

                <OPtionItemText id={selected} primary={selected} />
              </RenderOptionItem>
            );
          }}
        >
          {props.data.map((option, index) => (
            <MenuOptionItem
              key={option.owner}
              value={option.owner}
              label={option.owner}
            >
              <OptionItemAvatar>
                <ItmeAvatar src={option.avatar}></ItmeAvatar>
              </OptionItemAvatar>
              <OPtionItemText id={option.owner} primary={option.owner} />
            </MenuOptionItem>
          ))}
        </SelectContainer>
      </SelectInputFormControl>
    </StSelectAuto2>
  );
};

const StSelectAuto2 = styled.div`
  display: flex;
  width: 100%;
`;

const SelectInputFormControl = styled(FormControl)`
  min-width: 8rem;
  margin: 0.1rem;
`;

const SelectLabelWrapper = styled(InputLabel)`
  display: flex;
  justify-content: center;

  align-items: center;
  transform-origin: top left;
  /* transform-origin: center left; */
  position: absolute;
  /* height: 100%; */
  /* gap: 0.5rem; */
  color: ${COLOR.FONT_GRAY};
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;

  & .MuiFormLabel-root {
    justify-content: center;
    align-items: center;
    transform-origin: top left;
    text-align: center;
  }
`;

const SelectContainer = styled(Select)`
  display: flex;
  position: relative;

  & .MuiSelect-select {
    width: 100%;
    height: 4rem;
    padding: 2rem;
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
