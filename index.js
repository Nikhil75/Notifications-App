const Notification = (props) => {
  const { className, iconUrl, text } = props;

  return (
    <div className={className}>
      <img className="Icons" src={iconUrl} />
      <p className="Message">{text}</p>
    </div>
  );
};

const element = (
  <div className="notification-container">
    <div className="notification-head">
      <h1 className="notification-text">Notifications</h1>
    </div>
    <div className="notifications-type">
      <Notification
        className="information-message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="success-message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        className="warning-message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        className="error-message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
