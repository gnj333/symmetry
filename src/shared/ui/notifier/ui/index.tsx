import { PropsWithChildren } from "react";
import { animated, useTransition } from "react-spring";
import { useUnit } from "effector-react";

import { $notifications, type Notification } from "../model";

import styled from "@emotion/styled";

const AlertStyled = styled.div<{ variant: Notification["variant"] }>(
  ({ variant }) => ({
    background: variant === "success" ? "#d6fcf7" : "#ffe8e8",
    borderLeft:
      variant === "success" ? "4px solid #ffffff" : "4px solid #333333",
    boxShadow: "2px 2px 0px 0px #000000",
    padding: "15px",
    position: "fixed",
    top: "20px",
    right: "20px",
    height: "93px",
    alignItems: "center",
    display: "flex",
    color: "black",
    fontWeight: 600,
    whiteSpace: "nowrap",
    border: "1px solid black",
    borderRadius: "15px",
  }),
);

const StackStyled = styled.div`
  gap: 10px;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 100000000;
`;

export const notifyWrapperSelector = "notify";

const NotificationItem = ({ item }: { item: Notification }) => (
  <AlertStyled className={notifyWrapperSelector} variant={item.variant}>
    {item.message}
  </AlertStyled>
);

export const NotificationsProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const notifications = useUnit($notifications);

  const transitions = useTransition(notifications, {
    keys: (item) => item.id,
    from: { transform: "translateX(100%)", opacity: 0 },
    enter: { transform: "translateX(0)", opacity: 1 },
    leave: { transform: "translateX(100%)", opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <>
      <StackStyled>
        {transitions((styles, item) => (
          //@ts-ignore-
          <animated.div style={styles}>
            <NotificationItem item={item} />
          </animated.div>
        ))}
      </StackStyled>
      {children}
    </>
  );
};
