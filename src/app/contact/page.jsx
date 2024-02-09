import styles from "./contact.module.css";
const Contactpage = () => {
  return (
    <div>
      <div className="homepage-wrapper">
        <div>
          <img src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"></img>
        </div>
        <div className={styles.form}>
          <form action="">
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Phone number"></input>
            <input placeholder="Message"></input>
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
