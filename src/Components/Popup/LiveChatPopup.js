import React from "react";
import Text4 from "../Font/Text4";
import "./../../SCSS/Popup/_liveChatPopup.scss";
import live_chat from "./../../assets/Icon/live_chat.svg"
import click_to_call from "./../../assets/Icon/click_to_call.svg"
import write_query_or_email_us from "./../../assets/Icon/write_query_or_email_us.svg"
import faq from "./../../assets/Icon/faq.svg"
import visit_our_help_center from "./../../assets/Icon/visit_our_help_center.svg"
import cancel_grey from "./../../assets/Icon/cancel_grey.svg"
const liveChatPopupData = [
  {
    id: 1,
    title: "Live Chat",
    icon: live_chat,
  },
  {
    id: 2,
    title: "Click To Call",
    icon: click_to_call,
  },
  {
    id: 3,
    title: "Write Query or Email Us",
    icon: write_query_or_email_us,
  },
  {
    id: 4,
    title: "FAQ",
    icon: faq,
  },
  {
    id: 5,
    title: "Visit Our Help Center",
    icon: visit_our_help_center,
  },
];
function LiveChatPopup({closeLiveChatPopup}) {
  return (
    <div className="live__chat__popup__block">
      <div className="inner__live__chat__popup__block">
        <div className="live__chat__popup__header">
            <img className="cancel__button" onClick={closeLiveChatPopup} src={cancel_grey} alt="cancel" />
        </div>
        {liveChatPopupData.map((option, optionIndex) => {
          return (
            <div key={option.id} className="row live__chat__option__block">
              <img className="col-3 live__chat__option__icon" src={option.icon} alt={option.title} />
              <p className="col-9 live__chat__option__text">{option.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LiveChatPopup;
