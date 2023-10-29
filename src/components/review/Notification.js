import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useRecoilValue } from "recoil";
import {
  reivewAlertListState,
  reivewReportState,
} from "../../recoil/reviewState";
import { Alert, AlertTitle } from "@mui/material";
import { PropTypes } from "prop-types";

const AlertNotificationItem = (props) => {
  return (
    <StNotificationItem>
      <NotificationItemWrapper severity="warning">
        <NotificationItemTitle>
          Unable to confirm about <strong>{props.item}</strong>
        </NotificationItemTitle>
        Authority above the owner are required for accurately evaluated.
      </NotificationItemWrapper>
    </StNotificationItem>
  );
};
AlertNotificationItem.propTypes = {
  item: PropTypes.string.isRequired,
};

const NoneNotificationItem = (props) => {
  return (
    <StNotificationItem>
      <NotificationItemWrapper severity="error">
        <NotificationItemTitle>Fail </NotificationItemTitle>
        Your repository failed to verify — <strong>{props.item}</strong>
      </NotificationItemWrapper>
    </StNotificationItem>
  );
};

NoneNotificationItem.propTypes = {
  item: PropTypes.string.isRequired,
};

// props => data, type
const NotificationList = (props) => {
  return (
    <StNotificationList>
      {props.type === "alert" ? (
        <>
          {props.data.map((it, index) => {
            return <AlertNotificationItem key={it} item={it} />;
          })}
        </>
      ) : (
        <>
          {props.data.map((it, index) => {
            return <NoneNotificationItem key={it} item={it} />;
          })}
        </>
      )}
    </StNotificationList>
  );
};
NotificationList.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export const Notification = () => {
  const hasNotified = useRecoilValue(reivewReportState("hasNotified"));
  const alertList = useRecoilValue(reivewAlertListState);
  const noneList = useRecoilValue(reivewReportState("none"));

  return (
    <StNotification>
      {hasNotified ? (
        <>
          {alertList.length > 0 && (
            <NotificationList data={alertList} type={"alert"} />
          )}
          {noneList.length > 0 && (
            <NotificationList data={noneList} type={"none"} />
          )}
        </>
      ) : (
        <p>😄</p>
      )}
    </StNotification>
  );
};

Notification.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
};

const StNotification = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 15rem;
  overflow-y: auto;
`;

// notificationItem
const StNotificationItem = styled.div`
  display: flex;
  width: 100%;
`;

const NotificationItemWrapper = styled(Alert)`
  display: flex;
  width: 100%;
  background-color: ${COLOR.MAIN_WHITE};
  font-size: 1.2rem;
  strong {
    font-weight: bolder;
  }
`;
const NotificationItemTitle = styled(AlertTitle)`
  font-size: 1.5rem;
`;

// notificationList
const StNotificationList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
`;
